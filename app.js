'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    console.log(firstNameInput);
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    console.log(filteredPeople[0]);
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        
    }else{
        // while(filteredPeople === false){
        //     callback(searchByName);
        // }
    }
}

