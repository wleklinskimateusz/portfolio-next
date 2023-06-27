export type FindIndex<T extends readonly any[]> = T extends readonly [
  infer _,
  ...infer Rest
]
  ? Rest["length"] | FindIndex<Rest>
  : 0;
