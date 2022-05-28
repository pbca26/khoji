// ref: http://blog.davidjs.com/2018/07/convert-exponential-numbers-to-decimal-in-javascript/
const convertExponentialToDecimal = (exponentialNumber: number): string => {
  // sanity check - is it exponential number
  const str = exponentialNumber.toString();
  if (str.indexOf('e') !== -1) {
    const exponent = parseInt(str.split('-')[1], 10);
    // Unfortunately I can not return 1e-8 as 0.00000001, because even if I call parseFloat() on it,
    // it will still return the exponential representation
    // So I have to use .toFixed()
    const result = exponentialNumber.toFixed(exponent).toString();
    return result;
  } else {
    return exponentialNumber.toString();
  }
}

export const fromSats = (value: number): string => convertExponentialToDecimal(Number(Number(value * 0.00000001).toFixed(8)));