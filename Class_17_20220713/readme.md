# 17.nodarbības kopsavilkums :pushpin:

## Objekti

Objektu var definēt ar literāļa palīdzību: const <literālis> {};
Objekta īpašību (property) izgūšana:  
console.log(car.type) vai  
console.log(car["type"]);
console ir objekts, .log ir tās metode.  
Objekts ar metodi:  
const person = {
firstName: "John",
lastName : "Doe",
id : 5566,
fullName : function() {
return this.firstName + " " + this.lastName;
}
};  
No objektiem var taisīt dublikātus, izveidojot jaunu mainīgo;
This attiecās uz objekta saturu, ārpus tā globāli tas nedarbojas.
Ja dublikātam pievieno kādu īpašību, tas pāriet arī uz oriģinālu.
