export default function convertToRoman(decimal) {
  let roman = "";

  // Och &&
  // Eller  ||

  if (decimal > 9) {
    roman += "X";
    decimal -= 10;
  } else if (decimal > 4 && decimal < 9) {
    roman += "V";
    decimal -= 4;
  } else if (decimal === 4) {
    roman += "I";
    roman += convertToRoman(decimal + 1);
  }

  if (decimal < 4) {
    roman += "I";
    decimal -= 1;
  }

  //   if (roman === "") {
  //     decimal += 1;
  //     roman += "I";
  //     if (decimal > 4 && decimal < 9) {
  //       roman += "V";
  //       decimal -= 4;
  //     }
  //   }

  return roman;
}
