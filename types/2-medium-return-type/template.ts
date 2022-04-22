type MyReturnType<T extends (...arg: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
