function updateCountry() {
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");
    if (ddCountry.value == "Yes") {
        divCountry.classList.remove("invisible");
    }
    else {
        divCountry.classList.add("invisible");
    }
}


function validateForm() {
    var birth = document.querySelector("#txtDob");
    var divBirthError = document.querySelector("#divBirthError");

    var formIsValid = true;

    if (birth.value == "") {
        divBirthError.classList.remove("invisible");
        divBirthError.innerHTML = "The date of birth cannot be empty";
        birth.classList.add("hasError");
        formIsValid = false;
    }
    else {
        var birthDate = new Date(birthDate.value);
        var todayDate = new Date();
        if (birthDate > todayDate) {
            divBirthError.classList.remove("invisible");
            divBirthError.innerHTML = "Date of birth has to be before today's date";
            birth.classList.add("hasError");
            formIsValid = false;
        } else {
            divBirthError.classList.add("invisible");
            divBirthError.innerHTML = "";
            birth.classList.remove("hasError");
        }
    }

    var ddCountry = document.querySelector("#ddCountry");
    if (ddCountry.value == "Yes") {
        var country = document.querySelector("#txtcountry");
        var divCountryError = document.querySelector("#divCountryError");
        if (country.value == "") {
            divCountryError.classList.remove("invisible");
            divCountryError.innerHTML = "Enter at least one country";
            country.classList.add("hasError");
            formIsValid = false;
        }
        else {
            divCountryError.classList.add("invisible");
            divCountryError.innerHTML = "";
            country.classList.remove("hasError");
        }
    }

    var elements = document.getElementsByTagName("input");
    var invalChars = ['&', '<', '>', '#', '!', '`', '"', '~'];
    for (let i = 0; i < elements.length; i++) {
        for (let k = 0; k < invalChars.length; k++) {
            if (elements[i].value.indexOf(invalChars[k]) != -1) {
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
        }
    }
    return formIsValid;
}