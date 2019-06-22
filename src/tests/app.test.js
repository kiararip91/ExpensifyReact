const add = (a,b) => a + b

test("test1", () => {
    const result = add(5,2) 
    expect(result).toBe(7)
})