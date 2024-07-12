const ContactFrom = document.querySelector('.contact-form');
let name=document.getElementById('name');
let email=document.getElementById('email');
let subject=document.getElementById('subject');
let phnumber=document.getElementById('PhoneNumber');
let message=document.getElementById('message');

ContactFrom.addEventListener('submit', (e)=>{
   console.log("hh");
    e.preventDefault();

    let formData={
        name: namee.value,
        email: email.value,
        subject: subject.value,
        message: message.value,


    }
    console.log("hi")
    
})