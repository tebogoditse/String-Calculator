var findNeg = /[-]/g;
errorFunc = num => {
  var test = findNeg.test(num); //boolean
  if (!test) {
    return "Great!";
  } else {
    return "negatives not allowed";
  }
};

describe("A function", function() {
  it("should throw an error for negative numbers", () => {
 var err = errorFunc("-35");
   var jasmineError = () => {
     throw err;
   };
   expect(jasmineError).toThrow("negatives not allowed");
 });

  it("If the string is empty, it should return 0", function() {
    expect(add("")).toBe(0);
  });
  it("should handle one number", function() {
    expect(add("1")).toBe(1);
  });
  it("Should return the sum of numbers separated by commas", function() {
    expect(add("1,2")).toBe(3);
  });
  it("should add multiple/unknown amount of numbers", function() {
    expect(add("1,2,4,7,10")).toBe(24);
  });
  it("Should allow new lines to separate numbers", function() {
    expect(add("1\n2,3")).toBe(6);
  });
  it("Should treat ';' as a delimeter/separator", function() {
    expect(add("2;5;10")).toBe(17);
  });
  it("Should treat '//' as zero", function() {
    expect(add("//;2;5;10")).toBe(17);
  });



  it("Should trear numbers greater than 1000 as zero", function() {
    expect(add("1001;2")).toBe(2);
  });
  it("delimeters/separators can be of any length", function() {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });
  it("allow multiple delimeters/separators", function() {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });
  it("must handle multiple delimeters/separators with length longer than one character", function() {
    expect(add("//[***][%]\n\n\n1****2%%%%3")).toBe(6);
  });

  /*it("Should return 100", function() {
    expect(add(10, 25, 10, 5, 50)).toBe(100);
  });*/
})
