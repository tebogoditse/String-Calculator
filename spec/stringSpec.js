describe("A function", function() {

  it("Should return 0", function() {
    expect(add("")).toBe(0);
  });

  it("Should return 1", function() {
    expect(add("1")).toBe(1);
  });

  it("Should return 3", function() {
    expect(add("1,2")).toBe(3);
  });

  console.log("###########Allow the Add method to handle an unknown amount of numbers###########");
  it("Should return 6", function() {
    expect(add("1\n2,3")).toBe(6);
  });

  it("Should return 17", function() {
    expect(add("2\n5,10")).toBe(8);
  });

  /*it("Should return 100", function() {
    expect(add(10, 25, 10, 5, 50)).toBe(100);
  });*/
})
