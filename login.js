function checkcredit() {
  console.log("Started Login Procedure");
  var firstname = document.getElementById("f_name").value;
  var lastname = document.getElementById("l_name").value;
  var badge = document.getElementById("badgeid").value;
  var fullname = firstname + " " + lastname;

  console.log("Full name is: " + fullname + ", and the badge ID is: " + badge);

  if (fullname.length > 20 || fullname.length < 3) {
    document.getElementById("loginstatus").innerHTML =
      "Full name is invalid. Please try again.";
  } else if (badge > 999 || badge < -999 || badge == 0) {
    document.getElementById("loginstatus").innerHTML =
      "Badge ID is invalid. Please try again.";
  } else {
    alert("Access Granted. Welcome " + fullname);
    location.replace("UATSpaceHome.html");
  }
}
