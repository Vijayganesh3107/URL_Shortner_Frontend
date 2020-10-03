var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  ValidateEmail();
});

async function ValidateEmail() {
  var email = document.getElementById("email");
  var bodydata = { email: email.value };
  console.log(bodydata);

  var req = await fetch("http://localhost:3000/user/forgotpassword", {
    method: "POST",
    body: JSON.stringify(bodydata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  var data = await req.json();
  console.log(data);
  if (data.message == "User Present") {
    localStorage.setItem("ValidateEmail", email.value);
    alert("password has been sent to the registered email");
    localStorage.getItem("PasswordToken", data.token);
    // location.href = "changepassword.html";
  } else {
    alert(data.message);
  }
}
