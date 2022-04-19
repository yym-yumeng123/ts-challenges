/**
 * ts 遍历数组: T[number]
 */
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

// js实现
/**
 * @param array 遍历数组
 * @returns 对象
 */
function TupleToObject1(array) {
  const result = {};
  array.forEach((element) => {
    result[element] = element;
  });
  return result;
}
