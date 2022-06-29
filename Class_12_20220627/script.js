// Piemērs 1
// const bmw = 525;
// switch (bmw) {
//   case 330:
//     console.log("Šis ir 330 modelis");
//   case 530:
//     console.log("šis ir 530 modelis");
//   case 750:
//     console.log("šis ir 750 modelis");
//   case 525:
//     console.log("šis ir 525 modelis");
//   default:
//     console.log("šis nav bmw");
// }

// Piemērs 2
// const bmw = 525;
// switch (bmw) {
//   case 330:
//     console.log("Šis ir 330 modelis");
//     break;
//   case 530:
//     console.log("šis ir 530 modelis");
//     break;
//   case 750:
//     console.log("šis ir 750 modelis");
//     break;
//   case 525:
//     console.log("šis ir 525 modelis");
//     break;
//   default:
//     console.log("šis nav bmw");
// }

// Piemērs 3
let bmw = +prompt("Kāds ir Jūsu BMW modelis?");
switch (bmw) {
  case 330:
    alert("Pilsētas variants");
    break;
  case 530:
    alert("Šosejas variants");
    break;
  case 750:
    alert("Lux variants");
    break;
  case 525:
    alert("Tas kas vajadzīgs");
    break;
  default:
    alert("šis nav manā datu bāzē");
}
