// const car = { type: "Fiat", model: "500", color: "white" };

// // objekts ar metodi
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
//izsaucot person.fullName() jāliek iekavas, jo tikai tad saņemsim rezultātu, pretējā
//gadījumā tiks parādīta funkcija

const latvia = {
  valoda: "LV",
  galvaspilseta: "Rīga",
  iedzivotajuSkaits: 2000000,
  pilsēta: function () {
    return this.galvaspilseta + " " + this.valoda;
  },
};
console.log(latvia);
console.log(latvia.pilsēta());
console.log(
  `Latvijas galvaspilsēta ir ${latvia.galvaspilseta}
  un iedzīvotāju skaits ir nedaudz mazāks par ${latvia.iedzivotajuSkaits}`
);
const latvia2 = latvia;
console.log(latvia2);
latvia2.cits = "best";
