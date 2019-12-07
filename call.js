var person={

   display: function() {

        return this.fname + " " + this.lname;
        
    }
}

var person1={
    fname:'Bhairab',
    lname:'patra'
}

var obj = person.display.call(person1);
console.log(obj);