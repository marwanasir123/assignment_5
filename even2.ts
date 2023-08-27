var grades:number[]=[76,72,95,39,87,45,96,14];
for(var i=0; i <= grades.length; i++){
        if(grades[i]<50){
            grades.splice(i,1);  
        }
     }
    console.log(grades);