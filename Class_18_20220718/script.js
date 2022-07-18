let grades = [91, 66, 77, 84, 66];
let search = 66;

/*
function searchGrade(grades, search) {
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] == search) {
      console.log(`The grade ${search} exists`);
      break;
    }
  }
}
*/
function searchGrade(grades, search) {
  for (currentGrade of grades) {
    if (currentGrade == search) {
      console.log(`The grade ${search} exists`);
      break;
    }
  }
}
searchGrade(grades, search);

// This in objects

const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

let x = person1.fullName.call(person2);
document.getElementById("demo").innerHTML = x;
