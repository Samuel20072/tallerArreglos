export function validNum(value) {
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
        return "Número";
    } else if (/^[a-zA-Z]+$/.test(value)) {
        return "Letra";
    } else {
        return "No se pudo identificar";
    }
}
export  function esPrimo(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
