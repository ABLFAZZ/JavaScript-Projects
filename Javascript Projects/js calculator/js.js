
function Calc(){


    var a= document.getElementById("f-num").value;
    var b = document.getElementById("s-num").value;
    var c = document.getElementById("ope").value;
    
    



  if(c== "+"){
    var res = parseInt(a)+ parseInt(b);
    
    
  }
  if(c== "-"){
    var res = parseInt(a)- parseInt(b);
    
    
  }
  if(c== "*"){
    var res = parseInt(a)* parseInt(b);
    
    
  }
  if(c== "/"){
    var res = parseInt(a)/ parseInt(b);
    
    
   
  }

  document.getElementById("res").value =res ;
 



}