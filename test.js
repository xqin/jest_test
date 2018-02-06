describe('Test', () => {

  test('hello', () => {
    expect(true).toBe(true);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(true).toBe(true);
  });

  test("h'e'l\"lo w'o/[.*+?^${}()|[\]\\]/r'\"ld", () => {
      expect(true).toBe(true);
  });
});