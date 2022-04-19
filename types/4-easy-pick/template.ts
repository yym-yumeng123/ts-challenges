type MyPick<T, K extends keyof T> = {
  [Property in K]: T[Property];
};

/**
 * [P in K] : property 在 K 的值
 * K extends keyof T: K 的值 继承自 T 的所有key 值
 * T[P]: 取类型的值 => T['todo']
 * @returns
 */

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
