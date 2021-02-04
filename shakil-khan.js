const Aman = {
    Fanme: "shakil",
    Lname: "khan",
    salery: 15000,
    ChargerSalery: function (amount) {
        this.salery = this.salery - amount;
        return this.salery;
    }
}
const AwOman = {
    Fanme: "Abida",
    Lname: "Sultana",
    salery: 1300

}
const AGoodman = {
    Fanme: "Rakib",
    Lname: "Hossain",
    salery: 1800

}
// Aman.ChargerSalery();
const WomanCharge = Aman.ChargerSalery.bind(AwOman);
const AGoodmanCharge = Aman.ChargerSalery.bind(AGoodman);
// Aman.ChargerSalery(1500);
WomanCharge(500);
AGoodmanCharge(800);
console.log('Abida',AwOman.salery);
console.log('Rakib',AGoodman.salery);
console.log('shakil',Aman.salery);