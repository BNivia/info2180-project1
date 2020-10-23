/* Add your JavaScript to this file */
//Naomi Benjmain

document.addEventListener('DOMContentLoaded', function(){
   let msg = document.getElementsByClassName("message");
   let form = document.querySelector("form");
   let email = document.querySelector("input").textContent;
   
 
   form.addEventListener('submit', (e) =>{
       if (email === '' || email === null){
           msg.textContent = 'Please enter a valid email address.';
           console.log("lol works");
       }
       else{
           msg.textContent = 'Thank you!';
       }
        //e.preventDefault();
   });
    console.log("Yo okay. We loaded JS.")
    
}, false);



//var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;