import udomdiff from "udomdiff";
import { empty, gPD, isArray, set } from "./utils.js";
import { diffFragment } from "./persistent-fragment.js";
import drop from "./range.js";

const setAttribute = (element, name, value) =>
  element.setAttribute(name, value);

/**
 * @param {Element} element
 * @param {string} name
 * @returns {void}
 */
export const removeAttribute = (element, name) => element.removeAttribute(name);

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @returns {T}
 */
export const aria = (element, value) => {
  for (const key in value) {
    const $ = value[key];
    const name = key === "role" ? key : `aria-${key}`;
    if ($ == null) removeAttribute(element, name);
    else setAttribute(element, name, $);
  }
  return value;
};

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @param {string} name
 * @returns {T}
 */
export const at = (element, value, name) => {
  name = name.slice(1);
  const handlerPropertyName = `on${name}`;
  if (!element[handlerPropertyName]) element[handlerPropertyName] = value;
  return value;
};

/**
 * @template T
 * @param {import("./literals.js").Detail} detail
 * @param {T} value
 * @returns {T}
 */
export const hole = (detail, value) => {
  const { t: node, n: hole } = detail;
  let nullish = false;
  switch (typeof value) {
    case "object":
      if (value !== null) {
        (hole || node).replaceWith((detail.n = value.valueOf()));
        break;
      }
    case "undefined":
      nullish = true;
    default:
      node.data = nullish ? "" : value;
      if (hole) {
        detail.n = null;
        hole.replaceWith(node);
      }
      break;
  }
  return value;
};

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @returns {T}
 */
export const className = (element, value) =>
  maybeDirect(element, value, value == null ? "class" : "className");

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @returns {T}
 */
export const data = (element, value) => {
  const { dataset } = element;
  for (const key in value) {
    if (value[key] == null) delete dataset[key];
    else dataset[key] = value[key];
  }
  return value;
};

/**
 * @template T
 * @param {Element | CSSStyleDeclaration} ref
 * @param {T} value
 * @param {string} name
 * @returns {T}
 */
export const direct = (ref, value, name) => (ref[name] = value);

/**
 * @template T
 * @param {HTMLElement} ref
 * @param {T} value
 * @param {string} name
 * @returns {T}
 */
export const directModel = (ref, value, name) => {
  const handler = (e) => {
    const { value: inputValue } = e.target;
    value.current = inputValue;
  };

  if (!ref.oninput) ref.oninput = handler;

  return (ref[name] = value.current);
};

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @param {string} name
 * @returns {T}
 */
export const hash = (element, value, name) =>
  direct(element, value, name.slice(1));

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @param {string} name
 * @returns {T}
 */
export const props = (element, value, name) => {
  if (element.$props) return element.$props.set(name.slice(1), value);
};

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @param {string} name
 * @returns {T}
 */
export const model = (element, value, name) =>
  directModel(element, value, name.slice(1));

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @param {string} name
 * @returns {T}
 */
export const maybeDirect = (element, value, name) =>
  value == null
    ? (removeAttribute(element, name), value)
    : direct(element, value, name);

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @returns {T}
 */
export const ref = (element, value) => (
  typeof value === "function" ? value(element) : (value.current = element),
  value
);

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @param {string} name
 * @returns {T}
 */
const regular = (element, value, name) => (
  value == null
    ? removeAttribute(element, name)
    : setAttribute(element, name, value),
  value
);

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @returns {T}
 */
export const style = (element, value) =>
  value == null
    ? maybeDirect(element, value, "style")
    : direct(element.style, value, "cssText");

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @param {string} name
 * @returns {T}
 */
export const toggle = (element, value, name) => (
  element.toggleAttribute(name.slice(1), value), value
);

/**
 * @param {Node} node
 * @param {Node[]} value
 * @param {string} _
 * @param {Node[]} prev
 * @returns {Node[]}
 */
export const array = (node, value, prev) => {
  // normal diff
  const { length } = value;
  node.data = `[${length}]`;
  if (length) return udomdiff(node.parentNode, prev, value, diffFragment, node);
  /* c8 ignore start */
  switch (prev.length) {
    case 1:
      prev[0].remove();
    case 0:
      break;
    default:
      drop(diffFragment(prev[0], 0), diffFragment(prev.at(-1), -0), false);
      break;
  }
  /* c8 ignore stop */
  return empty;
};

export const attr = new Map([
  ["aria", aria],
  ["class", className],
  ["data", data],
  ["ref", ref],
  ["style", style],
]);

/**
 * @param {HTMLElement | SVGElement} element
 * @param {string} name
 * @param {boolean} svg
 * @returns
 */
export const attribute = (element, name, svg) => {
  switch (name[0]) {
    case "#":
      return hash;
    case ".":
      return props;
    case "~":
      return model;
    case "?":
      return toggle;
    case "@":
      return at;
    default:
      return svg || "ownerSVGElement" in element
        ? name === "ref"
          ? ref
          : regular
        : attr.get(name) ||
            (name in element
              ? name.startsWith("on")
                ? direct
                : gPD(element, name)?.set
                ? maybeDirect
                : regular
              : regular);
  }
};

/**
 * @template T
 * @param {Element} element
 * @param {T} value
 * @returns {T}
 */
export const text = (element, value) => (
  (element.textContent = value == null ? "" : value), value
);
