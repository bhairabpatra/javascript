var person={

    display: function(a) {
 
         return this.fname + " " + this.lname + " " + a;
         
     }
 }
 
 var person1={
     fname:'Bhairab',
     lname:'patra'
 }
 
 var obj = person.display.call(person1);
 console.log(obj,1,2,3);