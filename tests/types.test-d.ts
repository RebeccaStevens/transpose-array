import { expectType } from "tsd";

import transpose from "../src";

const data: any = [
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
];

const arrayArray: string[][] = data;
const test1 = transpose(arrayArray);
expectType<string[][]>(test1);

const arrayTuple: Array<[string, string, string, string]> = data;
const test2 = transpose(arrayTuple);
expectType<[string[], string[], string[], string[]]>(test2);

const tupleArray: [string[], string[], string[]] = data;
const test3 = transpose(tupleArray);
expectType<Array<[string, string, string]>>(test3);

const tupleTuple: [
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
] = data;
const test4 = transpose(tupleTuple);
expectType<
  [["a", "e", "i"], ["b", "f", "j"], ["c", "g", "k"], ["d", "h", "l"]]
>(test4);

const any: any = data;
const test5 = transpose(any);
expectType<any>(test5);

const neverArray: never[] = data;
const test6 = transpose(neverArray);
expectType<never[]>(test6);

const tupleZero: [] = data;
const test7 = transpose(tupleZero);
expectType<[]>(test7);
