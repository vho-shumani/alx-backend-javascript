export default function cleanset(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const str = [];

  for (const val of set) {
    if (val.startsWith(startString)) {
      str.push(val.slice(startString.length));
    }
  }
  return str.join('-');
}
