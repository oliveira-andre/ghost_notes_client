const calc = (number, unit) => { return(`calc(${number / 16} * 1${unit})`) }

const rem = (number) => { return(calc(number, 'rem')) };
const em = (number) => { return(calc(number, 'em')) };

export { rem, em };
