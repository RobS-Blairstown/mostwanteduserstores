'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
       console.log("There is nobody with this name.");
    }
}

function searchById(){
    let idInput = document.forms['idForm']['id'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.id === idInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log("There is no one with this ID Number.");
    }
}

function searchGender(){
    let genderInput = document.forms['genderForm']['gender'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.id === genderInput){
        return true;
        }
        return false;
    });
    console.log(filteredPeople);
}

