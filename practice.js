const normalPerson = {
    FirstName : "shakil",
    LastName : "khan",
    Salery: 15000,
    getFullName: function(){
        const fullName = this.FirstName +' '+this.LastName;
        return fullName;
    },
    chargeSalery: function(amount){
        this.Salery = this.Salery - amount;  // ekahn e kono variable declare korle bire clg krt hobe, r variable declare na krl baire theke call kora jaby
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

normalPerson.chargeSalery(1500);
console.log(normalPerson.Salery);

// const GoodManCharge = normalPerson.chargeSalery.bind(GoodMan);
// GoodManCharge(100000);
// console.log(GoodMan.Salery);
