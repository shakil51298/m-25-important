const myObj = {
    name : 'kuddus',
    getFullName: function(){
        return 'Mr. ' + this.name;
    }
}
const shaki = myObj.getFullName();
console.log(shaki);