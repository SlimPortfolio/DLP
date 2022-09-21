function submit(){
    document.getElementById("myForm").submit();
}

$("#div1").hide();

$(document).ready(function(){
    $("#div1").fadeTo(1150,1);
  });

$("#subtitle").hide();

$(document).ready(function(){
    $("#subtitle").fadeIn(500);
  });  
function submitForm(){
  
  const a = document.getElementById("name").value;
  console.log(a);
  document.getElementById("name").value = "";

  const b = document.getElementById("date").value;
  console.log(b);
  document.getElementById("date").value = "";

  const c = document.getElementById("location").value;
  console.log(c);
  document.getElementById("location").value = "";

  const d = document.getElementById("phoneNumber").value;
  console.log(d);
  document.getElementById("phoneNumber").value = "";

  const e = document.getElementById("email").value;
  console.log(e);
  document.getElementById("email").value = "";

  const f = document.getElementById("song").value;
  console.log(f);
  document.getElementById("song").value = "";

  const g = document.getElementById("notes").value;
  console.log(g);
  document.getElementById("notes").value = "";

  const h = document.getElementById("successfulSubmission").innerHTML = "You have successfully submitted your information!"
}
