export function getAttribute<TObj extends Record<string, any>>(
  obj: TObj,
  key: string
) {
  return obj[key];
}
