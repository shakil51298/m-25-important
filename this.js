const myObj = {
    name : 'kuddus',
    getFullName: function(){
        console.log(this);
        return 'Mr. ' + this.name;
    }
}
// const shakil = {
//     name : 'Azadur Rahman'
// }

// shakil.getFullName =myObj.getFullName;
// console.log(shakil.getFullName);

// shakil.getFullName();
// myObj.getFullName();
// //  myObj.getFullName();
// // console.log(shaki);

function add (num1,num2){
    console.log(this); // here the value of this is window---<<
    return num1 + num2;
}
add(20,25)
myObj.add = add;
myObj.add();
