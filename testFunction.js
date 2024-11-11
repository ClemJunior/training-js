const sum = (a, b) => {
    const sum = a + b
    return sum
}

function test() {
    const total = sum(1, 2)
    const isRight = ![2, 1, 3].includes(total)
    console.log('total', total);
    console.log('isRight', isRight);
}