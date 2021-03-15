'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // firstLetterUppercase(firstNameInput);
    // firstLetterUppercase(lastNameInput); need to make inputs first letter capital because system wont read if input is all lowercase.

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        helperFunction(filteredPeople);
    }else{
       console.log("There is nobody with this name.");
    }
}

function firstLetterUppercase(word){
    var firstLetter = word.charAt(0).toUpperCase;
    return firstLetter;
}


function searchById(){
    let idInput = document.forms['idForm']['id'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.id == idInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        helperFunction(filteredPeople);
    }else{
        console.log("There is no one with this ID Number.");
    }
}




function searchByGender(){
    let genderInput = document.forms['genderForm']['gender'].value.toLowerCase();

    let filteredPeople = people.filter(function (person) {
        if (person.gender === genderInput){
        return true;
        }
        return false;
    });
    helperFunction(filteredPeople);
}




function searchByDob(){
    let dobInput = document.forms['dobForm']['dob'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.dob == dobInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        helperFunction(filteredPeople);
    }else{
        console.log("There is no one with this Date of Birth.");
    }
}




function searchByHeight(){
    let heightInput = document.forms['heightForm']['height'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.height == heightInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        helperFunction(filteredPeople);
    }else{
        console.log("There is no one standing at this height.");
    }
}





function searchByWeight(){
    let weightInput = document.forms['weightForm']['weight'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.weight == weightInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        helperFunction(filteredPeople);
    }else{
        console.log("There is no one who weighs this amount.");
    }
}




function searchByEyeColor(){
    let eyeColorInput = document.forms['eyeColorForm']['eyecolor'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.eyeColor === eyeColorInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        helperFunction(filteredPeople);
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
        helperFunction(filteredPeople);
    }else{
        console.log("There is no one with this particular occupation.");
    }
}




function searchByParents(){
    let parentsInput = document.forms['parentsForm']['parents'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.parents == parentsInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        helperFunction(filteredPeople);
    }else{
        console.log("These parents were not found in the search.");
    }
}




function searchBySpouse(){
    let spouseInput = document.forms['spouseForm']['currentspouse'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.currentSpouse == spouseInput){
        return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        helperFunction(filteredPeople);
    }else{
        console.log("There is no one with this spouse.");
    }
}



function helperFunction(results){
    var htmlString = "";
    for (let i = 0; i<results.length; i++)
    {
        htmlString += `<tr><td>${results[i].id}</td><td>${results[i].firstName}</td><td>${results[i].lastName}</td><td>${results[i].gender}</td><td>${results[i].dob}</td><td>${results[i].height}</td><td>${results[i].weight}</td><td>${results[i].eyeColor}</td><td>${results[i].occupation}</td><td>${results[i].parents}</td><td>${results[i].currentSpouse}</td></tr>`;
    }
    document.getElementById("test").innerHTML = htmlString;
}


// var htmlString = "";
//         for (let i = 0; i<filteredPeople.length; i++)
//         {
//             htmlString += `<tr><td>${filteredPeople[i].id}</td><td>${filteredPeople[i].firstName}</td></tr>`;

//         }
//         document.getElementById("test").innerHTML = htmlString;