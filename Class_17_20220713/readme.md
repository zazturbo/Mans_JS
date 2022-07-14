# 17.nodarbības kopsavilkums :pushpin:

### Objekti :triangular_flag_on_post:

- [x] Objektu var definēt ar literāļa palīdzību: const <literālis> {};  
- [x] Objekta īpašību ***(property)*** izgūšana:    
console.log(car.type) vai    
console.log(car["type"]);  
console ir objekts, .log ir tās metode.    
📁 Objekts ar metodi:    
const person = {  
firstName: "John",  
lastName : "Doe",  
id : 5566,  
fullName : function() {  
return this.firstName + " " + this.lastName;  
}  
};  
:arrow_right: No objektiem var taisīt `dublikātus`, izveidojot jaunu mainīgo;  
:arrow_right:  Ja dublikātam pievieno kādu īpašību, tas pāriet arī uz oriģinālu; 
![Objekta dublikāts]();  
:arrow_right: `This` attiecās uz objekta saturu, ārpus tā globāli tas nedarbojas;  
  
