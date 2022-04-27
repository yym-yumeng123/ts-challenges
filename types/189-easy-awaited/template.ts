type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer K>
  ? K extends Promise<unknown>
    ? MyAwaited<K>
    : K
  : never;

/**
 * 1. infer 条件类型
 * 2. 设置未知数
 */
