type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

/**
 * readonly: 只读属性
 * keyof T 获取 T 对象的的所有 Key 值
 */
