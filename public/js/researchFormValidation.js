window.onsubmit = validateForm;


function validateForm(){


    var invalidMessages = "";

    if (validatePhone() === false){
        invalidMessages += "Invalid phone number\n";
    }

    var conditions = validateConditions();
    if (conditions === 2){
        invalidMessages += "No conditions selected\n";
    }
    else if (conditions === 3){
        invalidMessages += "Invalid conditions selection\n";
    }
    

    if (validateTime() === false){
        invalidMessages += "No time period selected\n";
    }

    if (validateID() === false){
        invalidMessages += "Invalid study id";
    }


    if (invalidMessages !== "") {
        alert(invalidMessages);
        return false;
    } 
    
    else{
        if (window.confirm("Do you want to submit the form data?")){
            return true;
        }
        else{
            return false;
        }
        
    }
   


}


function validatePhone(){

    var first = document.getElementById("phoneFirstPart").value;
    var second = document.getElementById("phoneSecondPart").value;
    var third = document.getElementById("phoneThirdPart").value;

    if ((first.length !== 3) || (second.length !== 3) || (third.length !== 4)){
        return false;

    }


    if (String(parseInt(first)) !== first || String(parseInt(second)) !== second || String(parseInt(third)) !== third){
        return false;
    }
    else{
        return true;
    }

}


function validateConditions(){

    var bloodPressure = document.getElementById("bloodPressure").checked;
    var diabetes = document.getElementById("diabetes").checked;
    var glaucoma = document.getElementById("glaucoma").checked;
    var asthma = document.getElementById("asthma").checked;
    var none = document.getElementById("none").checked;

    

    if (bloodPressure === false && diabetes === false && glaucoma === false && asthma === false && none === false ){//no conditions checked 
        return 2;

    }
    else if (none === true){//selected 'none'
        if (bloodPressure === true || diabetes === true || glaucoma === true || asthma === true){//conflicting conditions
            return 3;

        }

    }
    else return 1;//valid
}

function validateTime(){

    var never = document.getElementById("never").checked;
    var lessThan = document.getElementById("lessThan").checked;
    var oneToTwo = document.getElementById("oneToTwo").checked;
    var moreThan = document.getElementById("moreThan").checked;

    console.log(document.getElementById("never").value)


    if ((never !== true) && (lessThan !== true) && (oneToTwo !== true) && (moreThan !== true)){//none are selected
        return false;

    }
    return true;


}


function validateID(){

    var first = document.getElementById("firstFourDigits").value;
    var second = document.getElementById("secondFourDigits").value;

    if (first.length !== 4 || second.length !== 4){
        return false;
    }

    if (first.charAt(0) !== 'A' || second.charAt(0) !== 'B'){
        return false;
    }

    var firstNumbers = (first.slice(1));
    var secondNumbers = (second.slice(1));

    if (isNaN(firstNumbers) || isNaN(secondNumbers)){
        return false;
    }


    return true;



}


