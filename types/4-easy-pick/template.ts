type MyPick<T, K extends keyof T> = {
  [Property in K]: T[Property];
};

// js 翻译 ts => 对比学习

/**
 *
 * @param todo 对象
 * @param keys 取值
 * @returns 一个对象
 */
function myPick(todo, keys) {
  const obj = {};

  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
}
