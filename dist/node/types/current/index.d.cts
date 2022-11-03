declare type Transpose<T extends ReadonlyArray<ReadonlyArray<unknown>>> = T extends readonly [] ? [] : T extends readonly [infer X extends ReadonlyArray<unknown>] ? TupleSimpleCase<X> : T extends readonly [
    infer X extends ReadonlyArray<unknown>,
    ...infer XS extends ReadonlyArray<ReadonlyArray<unknown>>
] ? PrependCol<X, Transpose<XS>> : T extends ReadonlyArray<never> ? never[] : T extends ReadonlyArray<infer X extends ReadonlyArray<unknown>> ? ArrayCase<X> : T;
declare type PrependCol<T extends ReadonlyArray<unknown>, S extends ReadonlyArray<ReadonlyArray<unknown>>> = T extends readonly [] ? S extends readonly [] ? [] : never : T extends readonly [infer X, ...infer XS] ? S extends readonly [
    readonly [...infer Y],
    ...infer YS extends ReadonlyArray<ReadonlyArray<unknown>>
] ? [[X, ...Y], ...PrependCol<XS, YS>] : never : T extends ReadonlyArray<infer X> ? S extends ReadonlyArray<readonly [...infer Y]> ? Array<[X, ...Y]> : never : T extends ReadonlyArray<unknown> ? S extends readonly [] ? [] : never : never;
declare type TupleSimpleCase<T extends readonly [...unknown[]]> = T extends readonly [] ? [] : T extends readonly [infer X, ...infer XS] ? [[X], ...TupleSimpleCase<XS>] : T extends ReadonlyArray<infer X> ? Array<[X]> : never;
declare type ArrayCase<T extends ReadonlyArray<unknown>> = T extends readonly [] ? [] : T extends readonly [infer X, ...infer XS] ? [X[], ...ArrayCase<XS>] : T extends ReadonlyArray<infer X> ? X[][] : never;

/**
 * Create a new array which is a transposed version of the given array.
 *
 * @param matrix - The matrix to create the transposed one from.
 * @throws {TypeError} When the number of items per row/column are inconsistent.
 * @returns The transposed matrix.
 */
declare function transpose<T extends ReadonlyArray<ReadonlyArray<unknown>>>(matrix: T): Transpose<T>;
/**
 * Modifies the given array in order to transpose it.
 *
 * @param matrix - The matrix to transpose.
 * @throws {TypeError} When the number of items per row/column are inconsistent.
 */
declare function transposeInPlace(matrix: unknown[][]): void;

export { transpose as default, transposeInPlace };
