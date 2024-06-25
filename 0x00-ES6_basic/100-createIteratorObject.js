export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const idx of Object.values(report.allEmployees)) {
        yield* idx;
      }
    },
  };
}
