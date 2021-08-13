
var person = {
    firstname: 'Chiku',
    lastname: 'Lara',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;        
    }
};
var interests = ['sweets', 'gardening'];

var getPersonInfo = function(snack, hobby) {   
    return this.getFullName() + ' loves ' + snack + ' and ' + hobby;
};


//The bind() method creates a new function that, when called, has its this keyword set to the provided value.    
var logPerson = getPersonInfo.bind(person); // creates new object and binds person. 'this' of person === person now
console.log( 'Using bind():', logPerson(...interests)); 




// getPersonInfo.call(person,'sweets', 'gardening'); 
console.log( 'Using call():', getPersonInfo.call(person, ...interests)); 

// getPersonInfo.apply(person,['sweets', 'gardening']); 
console.log( 'Using apply():', getPersonInfo.apply(person, interests)); 
