# 11.nodarbības kopsavilkums :pushpin:

a=50;
50
if(a>100){console.log(a+"ir lielāks par 100")};
undefined
a>10
true
if(a>10){console.log(a+"ir lielāks par 10")}
VM398:1 50ir lielāks par 10

a=0
0
if(a){console.log(a+"ir pilnīga nulle 00000000")}

a=0
0
if(a){console.log(a+"ir pilnīga nulle 00000000")}else {a+"nav apaļa nulle"}
'0nav apaļa nulle'
//šajā gadījumā nostrādāja boolean loģika - a=0 un 0 pati pa sevi ir false.

if(a!=0){a+"nav pilnīga nulle"}else{console.log(a+"ir pilnīga nulle")}
VM965:1 0ir pilnīga nulle

language="LV";
'LV'
if (language=="LV")
{greeting="Sveiks Latvieti";}
else
{greeting="Nezinu kā ar tevi runāt"}
console.log(greeting);

VM1274:1 Sveiks Latvieti

time =13
13
if(time<10) {greeting="labrīt"}else if(time>20){greeting="labvakar"}else{greeting="labdien"}console.log(greeting);  
VM2055:1 labdien

## Destrukturizācija
🗒️
let a=1;  
 let b=2;  
[a,b]=[b,a];
a=2;  
b=1;

## Laicīgais mainīgais
🗒️
let a = 1;  
let b = 2;  
let temp;  
temp = a;  
a = b;  
b = temp;  
a; // => 2  
b; // => 1
