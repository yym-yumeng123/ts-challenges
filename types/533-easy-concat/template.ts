type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

// js
function concat(a1, a2) {
  return a1.concat(a2);
}
