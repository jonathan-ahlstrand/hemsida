import convertToRoman from "./roman";

describe("convertToRoman", () => {
  it("should return I for 1", () => {
    const result = convertToRoman(1);

    expect(result).toEqual("I");
  });

  it("should return V for 5", () => {
    const result = convertToRoman(5);

    expect(result).toEqual("V");
  });

  it("should return X for 10", () => {
    const result = convertToRoman(10);

    expect(result).toEqual("X");
  });

  it("should return IV for 4", () => {
    const result = convertToRoman(4);

    expect(result).toEqual("IV");
  });

  it("should return VI for 6", () => {
    const result = convertToRoman(6);

    expect(result).toEqual("VI");
  });

  it("should return IX for 9", () => {
    const result = convertToRoman(9);

    expect(result).toEqual("IX");
  });

  it("should return XL for 50", () => {
    const result = convertToRoman(50);

    expect(result).toEqual("L");
  });

  it("should return CI for 101", () => {
    const result = convertToRoman(101);

    expect(result).toEqual("CI");
  });

  it("should return CLXI for 169", () => {
    const result = convertToRoman(169);

    expect(result).toEqual("CLXIX");
  });
});
