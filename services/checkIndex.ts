export function checkIndexValue(value: unknown, arr: readonly any[]) {
  if (typeof value !== "number") {
    return "Expected a number";
  }

  if (value < 0 || value >= arr.length) {
    return `Expected a number between 0 and ${arr.length - 1}`;
  }

  return true;
}
