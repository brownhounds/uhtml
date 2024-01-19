import { cache } from '../literals.js';
import { empty, set } from '../utils.js';

/** @typedef {import("../rabbit.js").Hole} Hole */

/** @type {WeakMap<Element | DocumentFragment, import("../literals.js").Cache>} */
const known = new WeakMap;

/**
 * Render with smart updates within a generic container.
 * @template T
 * @param {T} where the DOM node where to render content
 * @param {(() => Hole) | Hole} what the hole to render
 * @returns
 */
export default (where, what) => {
  const info = known.get(where) || set(known, where, cache(empty));
  if (info.n !== (typeof what === 'function' ? what() : what).toDOM(info))
    where.replaceChildren(info.n.valueOf());
  return where;
};
