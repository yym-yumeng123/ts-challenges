type MyAwaited<T> = T extends Promise<infer K> ? MyAwaited<K> : T;
