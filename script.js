// Typing Animation

const text =
" CSE Student | Portfolio ";

let i = 0;

function typingEffect(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect,100);
    }
}

typingEffect();


// Form Validation

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let message =
    document.getElementById("message").value.trim();

    let error =
    document.getElementById("error");

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === ""){
        error.style.color = "red";
        error.innerText = "Please enter your name";
        return;
    }

    if(!emailPattern.test(email)){
        error.style.color = "red";
        error.innerText = "Please enter a valid email";
        return;
    }

    if(message.length < 10){
        error.style.color = "red";
        error.innerText =
        "Message should contain at least 10 characters";
        return;
    }

    error.style.color = "lightgreen";
    error.innerText =
    "Form Submitted Successfully ✅";

    document.getElementById("contactForm").reset();
});