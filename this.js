const myObj = {
    name : 'kuddus',
    getFullName: function(){
        console.log(this);
        return 'Mr. ' + this.name;
    }
}
myObj.getFullName()