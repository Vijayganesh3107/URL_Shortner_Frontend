var email = localStorage.getItem("ValidateEmail");
var token = localStorage.getItem("ValidatepasswordToken");
var p = document.getElementById("p");
p.innerHTML = email;

async function ValidateForgetpassword() {
  try {
    var res = await fetch(
      `http://localhost:3000/user/forgetpasswordauth/${email}`,
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
