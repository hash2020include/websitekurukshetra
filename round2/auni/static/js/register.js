var k=/^[A-Z a-z]+$/;
function v()
 {
  if(!document.getElementById("t1").value.match(k)||!document.getElementById("t2").value.match(k)){
  window.alert("Enter a valid Name");
  return false;
  }
 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (!document.getElementById("e1").value.match(mailformat))
  {
    window.alert("You have entered an invalid email address!"); 
    return (false);
  }
  var x= document.getElementById("t4").value;
  if(isNaN(x)){
    window.alert("You have entered an invalid mobile number!"); 
    return (false);
  }
  var num=parseInt(document.getElementById("t4").value);
  if(num<1000000000||num>9999999999)
  {
    window.alert("You have entered an invalid mobile number!"); 
    return (false);
  }
} 

function pn()
{ 
   var x= document.getElementById("t4").value;
   if(isNaN(x)){document.getElementById("s2").innerHTML="enter valid input";}
   else{document.getElementById("s2").innerHTML="";}
} 
function change()
{ 
   var x= document.getElementById("t1").value;
   document.getElementById("t1").value=x.toUpperCase();
   var y= document.getElementById("t2").value;
   document.getElementById("t2").value=y.toUpperCase();
} 

