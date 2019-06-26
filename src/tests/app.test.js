const add = (a,b) => a + b

test("should add 5 and 2", () => {
    const result = add(5,2) 
    expect(result).toBe(7)
})