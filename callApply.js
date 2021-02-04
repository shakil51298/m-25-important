const normalPerson = {
    Fname: "Shakil",
    Lname: "Khan",
    Salery:15000,
    getFullName :function(){
        const name = (this.Fname +" "+ this.Lname);
        this.Fname = name
        return this.Fname;                          //main thing is "this.something"
    },
    chargeSalery: function(Aamount){
        this.Salery = this.Salery - Aamount;
        return this.Salery;
    }
}

// normalPerson.chargeSalery(12020);
// console.log(normalPerson.Salery);
normalPerson.getFullName();
console.log(normalPerson.Fname);