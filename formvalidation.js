function fnameValidate(){
    let first_name=document.getElementById('fname').value;
    if(first_name==""){
        //call the function
        displayMsg("firstname is required","fnameMsg","red")
        return false;
    }
    else if(first_name.length<3){
        displayMsg("firstname must be more than two characters","fnameMsg","red")
        return false;
    }
    else{
        displayMsg("valid firstname","fnameMsg","green")
        return true
    }

}

function lnameValidate(){
let last_name=document.getElementById('lname').value;
    if(last_name==""){
        //call the function
        displayMsg("lastname is required","lnameMsg","red")
        return false;
    }
    else if(last_name.length<3){
        displayMsg("lastname must be more than two characters","lnameMsg","red")
        return false;
    }
    else{
        displayMsg("valid lastname","lnameMsg","green")
        return true
    }
}

function emailValidate(){
    let email=document.getElementById('email').value;
        if(email==""){
            //call the function
            displayMsg("email is required","emailMsg","red")
            return false;
        }
       
        else{
            displayMsg("valid email","emailMsg","green")
            return true
        }
    }
    
    



function displayMsg(msg,id,color){
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color=color

}