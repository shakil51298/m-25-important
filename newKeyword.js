class Person{
    constructor(Fname,Lname,Salery){
        this.Fname = Fname;
        this.Lname = Lname;
        this.Salery = Salery;
    }
}

// function PersonOld(Fname,Lname,Salery){
//     this.Fname =Fname;
//     this.Lname = Lname;
//     this.Salery = Salery;            //old code
// }
// const olDPerson =new PersonOld('shakil', "khan", 3250)
// console.log(olDPerson);

const shakil = new Person('shakil', 'khan', 50000);
const Mahbub = new Person('Md Mahbub', 'Hasan', 20000);
const Molla = new Person('Md Azam', 'Molla', 8000);


console.log(Molla);
console.log(Mahbub);
console.log(shakil);