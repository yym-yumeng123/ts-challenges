# ts-challenges

ts 类型体操

### extends 条件判断

```ts
T extends U ? X : Y // 如果 T 包含的类型 是 U包含的类型的 '子集'，那么取结果X，否则取结果Y

T 满足 U, 你需要的我有, 我就满足你
```

```ts
interface Animal {
  eat(): void;
}

interface Dog extends Animal {
  bite(): void;
}

// extends 类似于 三元表达式, 所以 A的类型为string
type A = Dog extends Animal ? string : number; // type A = string

// extends判断条件真假的逻辑是什么？
上面的例子: Dog 是 Animal 的子类, Dog 类型的值可以赋值给 Animal 类型的值, 判断为真

--------

interface A1 {
  name: string;
}

interface A2 {
  name: string;
  age: number;
}

// A 的类型为 string
type A = A2 extends A1 ? string : number;

const a: A = "this is string";

上面的例子: A1，A2两个接口，满足A2的接口一定可以满足A1，所以条件为真，A的类型取string

-----

### 泛型用法

type A1 = "x" extends "x" ? string : number; // string
type A2 = "x" | "y" extends "x" ? string : number; // number

// P是带参数T的泛型类型
type P<T> = T extends "x" ? string : number;

// A3是泛型类型P传入参数'x' | 'y'得到的类型，如果将'x' | 'y'带入泛型类的表达式
type A3 = P<"x" | "y">; // string | number

// 分配条件类型（Distributive Conditional Types）

对于使用 extends 关键字的条件类型（即上面的三元表达式类型），如果 extends 前面的参数是一个 泛型类型，当传入该参数的是联合类型，则使用分配律计算最终的结果

分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果

extends的前参为 T，T是一个泛型参数。在 A3 的定义中，给 T 传入的是'x'和'y'的联合类型'x' | 'y'，满足分配律，于是'x'和'y'被拆开，分别代入P<T>

P<'x' | 'y'> => P<'x'> | P<'y'>

'x' extends 'x' ? string : number => string
'y' extends 'x' ? string : number => number

然后将每一项代入得到的结果联合起来，得到 => string | number

满足两个要点即可适用分配律: 第一: 参数是泛型类型, 第二: 代入参数的是联合类型


### 特殊的 never

// never是所有类型的子类型
type A1 = never extends "x" ? string : number; // string

type P<T> = T extends "x" ? string : number;
type A2 = P<never>; // never

never 被认为是空的联合类型, 所以P<T>的表达式其实根本就没有执行，所以A2的定义也就类似于永远没有返回的函数一样，是never类型的

### 防止条件判断中的分配

type P<T> = [T] extends ["x"] ? string : number;
type A1 = P<"x" | "y">; // number
type A2 = P<never>; // string

条件判断类型的定义中，将泛型参数使用 [] 括起来，即可阻断条件判断类型的分配，此时，传入参数T的类型将被当做一个整体，不再分配
```

```ts
### 在高级类型中的应用

Exclude 是TS中的一个高级类型，其作用是从第一个联合类型参数中，将第二个联合类型中出现的联合项全部排除，只留下没有出现过的参数

type Exclude<T, U> = T extends U ? never : T

type A = Exclude<'key1' | 'key2', 'key2'> // 'key1'
==>
type A = `Exclude<'key1', 'key2'>` | `Exclude<'key2', 'key2'>`
==>
type A = ('key1' extends 'key2' ? never : 'key1') | ('key'2 extends 'key2' ? never : 'key2')


Extract 将第二个参数的联合项从第一个参数的联合项中提取出来，当然，第二个参数可以含有第一个参数没有的项
type Extract<T, U> = T extends U ? T : never

type A = Extract<'key1' | 'key2', 'key1'> // 'key1'

Pick extends的条件判断，除了定义条件类型，还能在泛型表达式中用来约束泛型参数

// 高级类型Pick的定义
type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}

interface A {
    name: string;
    age: number;
    sex: number;
}

type A1 = Pick<A, 'name'|'age'>
// 报错：类型“"key" | "noSuchKey"”不满足约束“keyof A”
type A2 = Pick<A, 'name'|'noSuchKey'>

K extends keyof T 则是用来约束K的条件，即，传入K的参数必须使得这个条件为真，否则ts就会报错，也就是说，K的联合项必须来自接口T的属性
```
