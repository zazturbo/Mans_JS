let atbilde = +prompt("Ievadiet skaitli:");
if (atbilde > 25) {
  alert("Izvēlieties skaitli līdz 25!");
}

switch (true) {
  case atbilde % 2 == 0:
    alert("izvēlētais skaitlis dalās ar 2");
    break;
  case atbilde % 3 == 0:
    alert("izvēlētais skaitlis dalās ar 3");
    break;
  case atbilde % 4 == 0:
    alert("izvēlētais skaitlis dalās ar 4");
    break;
  case atbilde % 5 === 0:
    alert("izvēlētais skaitlis dalās ar 5");
    break;
  default:
    alert("Izvēlieties skaitli līdz 25");
}
