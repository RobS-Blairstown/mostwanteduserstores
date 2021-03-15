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
    let idInput = document.forms['idForm']['idnumber'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.idnumber === idInput){
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




function searchByGender(){
    let genderInput = document.forms['genderForm']['gender'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.gender === genderInput){
        return true;
        }
        return false;
    });
    console.log(filteredPeople);
}




function searchByDob(){
    let dobInput = document.forms['dobForm']['dob'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.dob === dobInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log("There is no one with this Date of Birth.");
    }
}




function searchByHeight(){
    let heightInput = document.forms['heightForm']['pheight'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.pheight === heightInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log("There is no one standing at this height.");
    }
}





function searchByWeight(){
    let weightInput = document.forms['weightForm']['pweight'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.pweight === weightInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log("There is no one who weighs this amount.");
    }
}




function searchByEyeColor(){
    let eyeColorInput = document.forms['eyeColorForm']['eyecolor'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.eyecolor === eyeColorInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log("There is no one with this eye color.");
    }
}




function searchByOccupation(){
    let occupationInput = document.forms['occupationForm']['occupation'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.occupation === occupationInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log("There is no one with this particular occupation.");
    }
}




function searchByParents(){
    let parentsnput = document.forms['parentsForm']['parents'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.parents === parentsInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log("These parents were not found in the search.");
    }
}




function searchBySpouse(){
    let spouseInput = document.forms['spouseForm']['spouse'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.spouse === spouseInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log("There is no one with this spouse.");
    }
}

