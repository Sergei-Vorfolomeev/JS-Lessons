const makeCounter2 = (a) => {
    return {
        increase: () => {
            return ++a
        },
        decrease: () => {
            return --a
        },
        reset: () => {
            return a = 0
        },
    }

}

console.log(makeCounter2(5).increase())
console.log(makeCounter2(5).decrease())
console.log(makeCounter2(5).reset())

