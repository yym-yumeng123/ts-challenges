type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

// P 是否在 keyof T 中, 满足 K never, 不满足的 通过
