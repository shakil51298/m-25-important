const normalPerson = {
    FirstName : "shakil",
    LastName : "khan",
    Salery: 15000,
    getFullName: function(){
        const fullName = this.FirstName +' '+this.LastName;
        return fullName;
    },
    chargeSalery: function(amount,tips,tax){
        this.Salery = this.Salery - amount - tips - tax;  // ekahn e kono variable declare korle bire clg krt hobe, r variable declare na krl baire theke call kora jaby
        return this.Salery;
    }
}
const  GoodMan={
    FirstName:"Rakib",
    LastName : "Hossain",
    Salery: 98000,
}
// একটা ফাংশন আছে সেটার সাথে নতুন একটা ফাংশন(creat new funtion with new const) বাইন্ড করতে হবে।
const  RichdMan={
    FirstName:"Sakib",
    LastName : "Khan",
    Salery: 198000,
}

// normalPerson.chargeSalery(1500);

normalPerson.chargeSalery.call(RichdMan,8000,9980,20);
normalPerson.chargeSalery.call(RichdMan,5000,80000,0);

console.log(RichdMan.Salery);

// const GoodManCharge = normalPerson.chargeSalery.bind(GoodMan);
// GoodManCharge(100000);
// console.log(GoodMan.Salery);
