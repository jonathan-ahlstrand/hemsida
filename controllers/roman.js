export default function convertToRoman(decimal = 0) {
  // Och &&
  // Eller  ||

  return (
    handleHunders(Math.floor(decimal / 100)) +
    handleTens(Math.floor((decimal % 100) / 10)) +
    handleSingels(decimal % 10)
  );
}

function handleSingels(decimal = 0) {
  let roman = "";

  if (decimal === 0 || isNaN(decimal) || !decimal) {
    return roman;
  } else if (decimal > 9) {
    roman = "X";
    decimal -= 10;
  } else if (decimal > 4 && decimal < 9) {
    roman = "V";
    decimal -= 5;
  } else if (decimal % 5 > 3) {
    roman = "I";
    decimal += 1;
  } else if (decimal < 4) {
    roman = "I";
    decimal -= 1;
  }

  return roman + handleSingels(decimal);
}

function handleTens(decimal = 0) {
  let roman = "";

  console.log("ten: " + decimal);

  if (decimal === 0 || isNaN(decimal) || !decimal) {
    return roman;
  } else if (decimal > 9) {
    roman = "C";
    decimal -= 10;
  } else if (decimal > 4 && decimal < 9) {
    roman = "L";
    decimal -= 5;
  } else if (decimal % 5 > 3) {
    roman = "X";
    decimal += 1;
  } else if (decimal < 4) {
    roman = "X";
    decimal -= 1;
  }

  return roman + handleTens(decimal);
}

function handleHunders(decimal = 0) {
  let roman = "";

  console.log("hundered: " + decimal);

  if (decimal === 0 || isNaN(decimal) || !decimal) {
    return roman;
  } else if (decimal > 9) {
    roman = "M";
    decimal -= 10;
  } else if (decimal > 4 && decimal < 9) {
    roman = "D";
    decimal -= 5;
  } else if (decimal % 5 > 3) {
    roman = "C";
    decimal += 1;
  } else if (decimal < 4) {
    roman = "C";
    decimal -= 1;
  }

  return roman + handleHunders(decimal);
}
