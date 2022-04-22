import type { Equal } from "@type-challenges/utils";

// 利用infer取到数组的第一个，和U对比。相等的话说明U存在于T直接返回true，不相等则用数组剩余部分递归执行Includes
type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<U, First> extends true
    ? true
    : Includes<Rest, U>
  : false;
