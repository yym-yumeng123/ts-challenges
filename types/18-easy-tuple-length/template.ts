// T['length'] 获取长度
type Length<T extends readonly any[]> = T["length"];

// js
const ArrayLength = (arr) => {
  return arr.length;
};

type len = Length<[1, 2, 3]>;
