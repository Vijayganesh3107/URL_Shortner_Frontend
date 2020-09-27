var email = localStorage.getItem("ValidateEmail");
var token = localStorage.getItem("ValidatepasswordToken");
var p = document.getElementById("p");
async function ValidateForgetpassword() {
  try {
    var res = await fetch(
      `https://urlshortner-backend-assignment.herokuapp.com/user/forgetpasswordauth/${email}`,
      {
        method: "POST",
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    var data = await res.json();
    console.log(data);
    if (data.message == "Authenicated") {
      p.innerHTML = data.message;
      localStorage.removeItem("ValidatepasswordToken");
      location.href = "changepassword.html";
    }
  } catch (error) {
    console.log(error);
  }
}
ValidateForgetpassword();
