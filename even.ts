//calculate the n even number
var numb:number=20;
var sum:number=0;
for(var i=1; i<=numb; i++){
     if(i%2==0){
        sum +=i ;
        
     }
}
console.log("Calculate sum even num",sum );
//using array print only even number
var num:number[]=[12,13,14,15,16,17,18,19,20]
for(var index=0; index<=num.length; index++){
    if(num[index]%2==0){
        var sum=num[index];
       //console.log("this number is even",sum) 
    }
}
//remove all even number in array
var mix_values:number[]=[10,11,12,13,14,17,15,19,20]
for(var i=mix_values.length-1; i>=0; i--){
      if(mix_values[i]%2==0){
        mix_values.splice(i,1)
      }
    }
    console.log(mix_values);
//using funcation area of circle
function circle(raduis:number){
    //calculate the area
     var area = 22/7*(raduis**2);
     return area;
}
var calculate=circle(3);
console.log(calculate);
//read list of grades and remove failing method
var grades:number[]=[76,72,95,39,87,45,37,35,23,96,14];
for(var i= grades.length-1; i>=0; i--){
        if(grades[i]<50){
            grades.splice(i,1);
            //console.log(grades);  
        }
    }
    
// find largest value in array using function
var values:number[]=[20,30,40,45,60,100,300,10,900];
var get_values= values[0];
function largest_values(values:number[]){
      for(i=0; i<values.length;i++){
        if(values[i]>get_values){
            get_values= values[i];
        }
      }
      return get_values;
}
var ans = largest_values(values);
console.log(ans);
 

