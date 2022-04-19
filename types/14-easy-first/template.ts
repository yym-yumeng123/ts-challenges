// type First<T extends any[]> = T extends [] ? never : T[0]; // extends 类型条件判断
type First1<T extends any[]> = T["length"] extends 0 ? never : T[0]; // length 属性判断
type First2<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

type a = First<[3, 2, 1]>;

// infer 推断
const [first, ...rest] = [1, 2, 3];
