var person ={

    fullname : function(){
        return this.fname + " " + this.lname;
        }
}

var person1={

    fname:'bhairab',
    lname:'patra'
}

obj= person.fullname.bind(person1);
console.log(obj());