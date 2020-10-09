module.exports = function reverse (n) {
    let result = `${n}`;
    if (result[0] === "-") {
        result = result.slice(1);
    }
    console.log(result)
    result = `${result}`.split('').reverse().join('');
    return Number(result)
}
