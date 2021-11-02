export function dollarToFloat(x) {
  // Strip away unecessary stuff
  x = x.replace(/[^0-9.-]+/g, "");

  // Try conversion
  try {
    return parseFloat(x);
  } catch (error) {
    // If not, return null
    return null;
  }
}
