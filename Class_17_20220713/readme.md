# 17.nodarbības kopsavilkums :pushpin:

## Objekti

- [x] Objektu var definēt ar literāļa palīdzību: const <literālis> {};  
- [x] Objekta īpašību (property) izgūšana:    
console.log(car.type) vai    
console.log(car["type"]);  
console ir objekts, .log ir tās metode.    
- [x] Objekts ar metodi:    
const person = {  
firstName: "John",  
lastName : "Doe",  
id : 5566,  
fullName : function() {  
return this.firstName + " " + this.lastName;  
}  
};  
- [x] No objektiem var taisīt `dublikātus`, izveidojot jaunu mainīgo;  
- [x] `This` attiecās uz objekta saturu, ārpus tā globāli tas nedarbojas;  
- [x] Ja dublikātam pievieno kādu īpašību, tas pāriet arī uz oriģinālu;   
