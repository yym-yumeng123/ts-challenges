type MyExclude<T, U> = T extends U ? never : T;

// js 就是求两个东西的差集
const exclude = (T, U) => {
  const result = [];
  for (let t = 0; t < T.length; t++) {
    const element = T[t];

    if (!U.includes(element)) {
      result.push(element);
    }
  }
};

type a = Exclude<"a" | "b" | "c", "a">; // a: 'b' | 'c'
