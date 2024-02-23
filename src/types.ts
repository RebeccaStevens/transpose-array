export type Transpose<T extends ReadonlyArray<ReadonlyArray<unknown>>> =
  // Tuple empty case
  T extends readonly []
    ? []
    : // Tuple simple case
      T extends readonly [infer X extends ReadonlyArray<unknown>]
      ? TupleSimpleCase<X>
      : // Tuple general case
        T extends readonly [
            infer X extends ReadonlyArray<unknown>,
            ...infer XS extends ReadonlyArray<ReadonlyArray<unknown>>,
          ]
        ? PrependCol<X, Transpose<XS>>
        : // Empty array case
          T extends ReadonlyArray<never>
          ? never[]
          : // Array case
            T extends ReadonlyArray<infer X extends ReadonlyArray<unknown>>
            ? ArrayCase<X>
            : // Other case (e.g. T = any)
              T;

type PrependCol<
  T extends ReadonlyArray<unknown>,
  S extends ReadonlyArray<ReadonlyArray<unknown>>,
> = T extends readonly []
  ? S extends readonly []
    ? []
    : never
  : T extends readonly [infer X, ...infer XS]
    ? S extends readonly [
        readonly [...infer Y],
        ...infer YS extends ReadonlyArray<ReadonlyArray<unknown>>,
      ]
      ? [[X, ...Y], ...PrependCol<XS, YS>]
      : never
    : T extends ReadonlyArray<infer X>
      ? S extends ReadonlyArray<readonly [...infer Y]>
        ? Array<[X, ...Y]>
        : never
      : T extends ReadonlyArray<unknown>
        ? S extends readonly []
          ? []
          : never
        : never;

type TupleSimpleCase<T extends readonly [...unknown[]]> = T extends readonly []
  ? []
  : T extends readonly [infer X, ...infer XS]
    ? [[X], ...TupleSimpleCase<XS>]
    : T extends ReadonlyArray<infer X>
      ? Array<[X]>
      : never;

type ArrayCase<T extends ReadonlyArray<unknown>> = T extends readonly []
  ? []
  : T extends readonly [infer X, ...infer XS]
    ? [X[], ...ArrayCase<XS>]
    : T extends ReadonlyArray<infer X>
      ? X[][]
      : never;
