var password = document.getElementById("password");
var repassword = document.getElementById("re-password");
var submitbtn = document.getElementById("submitbtn");
var alert1 = document.querySelector(".alert1");
var alert2 = document.querySelector(".alert2");
var alert3 = document.querySelector(".alert3");
var email = localStorage.getItem("ValidateEmail");
var passwordtoken = localStorage.getItem("PasswordToken");
submitbtn.addEventListener("click", () => {
  if (password.value !== repassword.value) {
    alert1.classList.remove("displaynone");
    alert2.classList.add("displaynone");
  } else {
    if (password.value == "" && repassword.value == "") {
      alert2.classList.remove("displaynone");
      alert1.classList.add("displaynone");
    } else {
      ChangePassword();
      alert1.classList.add("displaynone");
      //   location.href = "login.html";
    }
  }
});

async function ChangePassword() {
  var bodydata = {
    password: password.value,
    email,
  };
  var req = await fetch(
    `https://vijay-urlshortner-backend.herokuapp.com/user/changepassword`,
    {
      method: "PUT",
      body: JSON.stringify(bodydata),
      headers: {
        "Content-Type": "application/json",
        Authorization: passwordtoken,
      },
    }
  );
  var data = await req.json();
  if (data.message == "Sucessfully updated the password") {
    alert3.classList.remove("displaynone");
  } else {
    alert(data.message);
  }
}
