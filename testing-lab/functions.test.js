let functions = require(`./function`)

test("Return Two Test", () => {
    expect(functions.returnTwo()).toBe(2)
})

test("Greeting Test", () => {
    expect(functions.greeting('James')).toBe('Hello, James.')
    expect(functions.greeting('Jill')).toBe('Hello, Jill.')
})

describe("Challenge", () => {
    test("Add Test", () => {
        expect(functions.add(1, 2)).toBe(3)
        expect(functions.add(5, 9)).toBe(14)
    })
    
    test("Multiply Test", () => {
        expect(functions.multiply(3, 3)).toBe(9)
        expect(functions.multiply(5, 10)).toBe(50)
    })
    
    test("Divide Test", () => {
        expect(functions.divide(27, 3)).toBe(9)
        expect(functions.divide(35, 7)).toBe(5)
    })
    
    test("Subtract Test", () => {
        expect(functions.subtract(8, 2)).toBe(6)
        expect(functions.subtract(132, 56)).toBe(76)
    })
})