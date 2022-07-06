let text = prompt("Ievadiet savu teikumu šeit:");

// let text = "a ab abc abcd abcde abcdef";
var burtu_skaititajs_varda = 0;
var simbolu_skaititajs_teikuma = 0;
var derigu_vardu_skaits = 0;
var N = 5;
for (let x of text) {
  simbolu_skaititajs_teikuma++;
  if (x == " ") {
    // console.log(x + "tā ir atstarpe");
    // console.log("Iepriekšējā vārdā bija " + burtu_skaititajs_varda + " burti");
    if (burtu_skaititajs_varda >= N) {
      //   console.log(
      "Vēl vairāk, iepriekšējā vārdā bija " + N + " un vairāk simboli";
      //   );
      derigu_vardu_skaits++;
    }
    burtu_skaititajs_varda = 0;
  } else {
    burtu_skaititajs_varda++;
    // console.log(x + " tas ir " + burtu_skaititajs_varda + ". simbols vārdā:");
    if (simbolu_skaititajs_teikuma == text.length) {
      //   console.log(
      "Iepriekšējā vārdā bija " + burtu_skaititajs_varda + " burti";
      //   );
      if (burtu_skaititajs_varda >= N) {
        // console.log(
        "Vēl vairāk, šis bija pēdējais vārds teikumā " +
          "un tajā bija " +
          N +
          " un vairāk simboli";
        // );
        derigu_vardu_skaits++;
      }
    }
  }
}
// netiek izanalizēts pēdējais vārds, risinājums ir ielikt beigās atstarpi
// (viltīgs paņēmiens bet nav īpaši labs vai text=text+" ", bet tas nav tālredzīgi)
document.getElementById("vardi").innerHTML =
  "Šajā teikumā :<br> " +
  text +
  "<br>" +
  " ir " +
  derigu_vardu_skaits +
  "  derīgi vārdi, kuru garums ir => par: " +
  N;
