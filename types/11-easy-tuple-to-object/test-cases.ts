import type { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// 类型不能为数组 和对象
// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

// const let js变量
// type interface 类型变量

// js变量 => 类型变量   keyof js => ts

type r = typeof tuple; // readonly ["tesla", "model 3", "model X", "model Y"] 字面量类型
type tuble = TupleToObject<typeof tuple>; // readonly ["0", "1", "2", "3"]  keyof array => 索引 0 1 2 3

const tuple1 = ["tesla", "model 3", "model X", "model Y"];
type r1 = typeof tuple1; // string[]

let a = "yym"; // a: string
const a1 = "yym"; // a1: 'yym'   只能是 yym
