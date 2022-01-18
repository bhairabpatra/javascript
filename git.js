function display(fname,lname){
    this.fname=fname;
    this.lname=lname;
   
}

display.prototype.fullname = function(){

    return this.fname + " " + this.lname;

}

obj = new display("bbhairab" , "patra");
console.log(obj.fullname());