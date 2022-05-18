type MyParameters<T extends (...args: any[]) => any> = T;

const foo = (arg1: string, arg2: number): void => {};

type a = MyParameters<typeof foo>;
type b = typeof foo;
