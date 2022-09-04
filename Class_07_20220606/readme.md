# 7.nodarbības kopsavilkums :pushpin:

### Logical operators  
🤯 `0||0 2||4` (|| nozīmē vai) šajā piemērā loģiskais vai sameklē pirmo patieso vērtību  
> //answer 2  

🤯 `4&&5` (& nozīmē un) šajā piemērā loģiskais operators un sameklē pirmo `false`, vai ja tāda nav, pēdējo vērtību  
> //answer 5  

```  
var bin = 0b1111; // bin will be set to 15  
var oct = 0o17; // oct will be set to 15  
var oxx = 017; // oxx will be set to 15  
var hex = 0xF; // hex will be set to 15  
// note: bB oO xX are all valid  
```  
- [x] `!9` (ne deviņi) ir = false  
- [x] `!0` (ne nulle) ir = true  
- [x] `|` loģiskais vai pa bitiem. `9|2 rezultāts ir 11`  

 
 |Skaitliskā sistēma|Skaitlis 9|Skaitlis 2|  
 |-|-|-|  
 |Decimālā|9|2|  
 |Binārā|00001001|00000010|  

 Ņemot vērā to, la loģiskais operators `| vai` sameklē pirmo loģisko vērtību, tad salīdzinot 9 un 2 binārā izteiksmē sanāk sekojošs rezultāts:  
 |Binārā vērtība|Decimālā vērtība|
 |:---:|:---:|
 |00001001|9|  
 |00000010|2|  
 |00001011|**11**|  
 
 - [x]#739 Vēl viens piemērs ar loģisko operatoru `~`:  ~4 (apgriež visus bitus uz pretējo stāvokli) ir = -5. Kā tas veidojas?  
 
 Decimālais skaitlis `4` binārā skaitīšanas sistēmā ir `00000100`  
 1. operators `~` samaina visu bitu stāvokli uz pretējo:  
 
 |Sākotnējais stāvoklis|Stāvoklis pēc tā maiņas|  
 |:---:|:---:|    
 |00000100|11111011|   
 
 @@ 2. Kad stāvoklis ir samainīts, vecākais bits (most significant bit) <span style="color:#f03c15">1</span>1111011  
 
