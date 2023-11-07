

let passwordDisplay = document.querySelector(".generate-value");
let  passwordBtn = document.querySelector(".password-generate-btn");

let symbols = "`@#$%^&*(){}[]|?/>.<,";
let numbers = "0123456789";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase ="abcdefghijklmnopqrstuvwxyz";
let lengthh = 12;
let set = symbols + numbers + upperCase + lowerCase;



function generatePassword(){
      let password = '';
   password += symbols[Math.floor(Math.random()*symbols.length)];
   password += upperCase[Math.floor(Math.random()*upperCase.length)];
   password += numbers[Math.floor(Math.random()*numbers.length)];
   password += lowerCase[Math.floor(Math.random()*lowerCase.length)];


   
   
   while(lengthh > password.length){
         password += set[Math.floor(Math.random()*set.length)];
      }
      
      passwordDisplay.value = password;
}

let copy = document.querySelector(".copy").addEventListener("click", ()=>{
     passwordDisplay.select()
     document.execCommand("copy")
})




  
passwordBtn.addEventListener("click",generatePassword)