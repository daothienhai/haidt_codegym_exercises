// Bài 1:
// function isFirstLetterUpperCase(str) {
//   var regexp = /^[A-Z]/;
//   if (regexp.test(str)) {
//     console.log("String's first character is uppercase");
//   } else {
//     console.log("String's first character is not uppercase");
//   }
// }

// isFirstLetterUpperCase("Nguyen van Nam");
// isFirstLetterUpperCase("NGUYEN VAN NAM");
// isFirstLetterUpperCase("nguyen van Nam");

////////////////////////////////////////////////////////////////
// Bài 2:
function is_usZipCode(str) {
  var regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if (regexp.test(str)) {
    return true;
  }
  return false;
}

var zipcode = "03201-2150";
console.log(is_usZipCode(zipcode));
zipcode = "7892";
console.log(is_usZipCode(zipcode));
