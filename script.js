var name_err = document.getElementById("name-err");
var phone_err = document.getElementById("phone-err");
var mail_err = document.getElementById("mail-err");
var msg_err = document.getElementById("msg-err");
var submit_err = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contactName").value;

    if(name.length == 0){
        name_err.innerHTML= "<i class='fa-solid fa-circle-xmark'></i>";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        name_err.innerHTML= "<i class='fa-solid fa-circle-xmark'></i>";
        return false;
    }
    name_err.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    name_err.style.color = "green";
    return true;
}

function validatePhone(){
    var phone = document.getElementById("contactPhone").value;

    if(phone.length == 0){
        phone_err.innerHTML="<i class='fa-solid fa-circle-xmark'></i>" ;
        return false;
    }
    if(phone.length != 10){
        phone_err.innerHTML="<i class='fa-solid fa-circle-xmark'></i>" ;
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phone_err.innerHTML="<i class='fa-solid fa-circle-xmark'></i>";
        return false;
    }

    phone_err.innerHTML="<i class='fa-solid fa-circle-check'></i>";
    phone_err.style.color = "green";
    return true;
}

function validateEmail(){
    var email = document.getElementById("contactEmail").value;

    if(email.length == 0){
        mail_err.innerHTML="<i class='fa-solid fa-circle-xmark'></i>";
        return false;
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mail_err.innerHTML="<i class='fa-solid fa-circle-xmark'></i>";
        return false;
    }

    mail_err.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
    mail_err.style.color = "green";
    return true;
}

function validateMsg(){
    var msg = document.getElementById("msg").value;
    var required = 30;
    var left = required - msg.length;
    if(left>0){
        msg_err.innerHTML = left + "more characters required";
        return false;
    }

    msg_err.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
    msg_err.style.color = "green";
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail || !validateMsg()){
        submit_err.innerHTML = "Please fix error to submit!";
        submit_err.style.display = "block";
        setTimeout(()=>{
            submit_err.style.display="none"
        }, 3000);
        return false;
    }
}