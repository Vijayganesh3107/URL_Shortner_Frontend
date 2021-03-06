var submitbtn = document.querySelector("#submitbtn");
var password = document.getElementById("password");
var email = document.getElementById("email");
var repassword = document.getElementById("re-password");
var alert1 = document.querySelector(".alert1");
var alert2 = document.querySelector(".alert2");
var alert3 = document.querySelector(".alert3");
submitbtn.addEventListener("click", () => {
  if (password.value !== repassword.value) {
    alert1.classList.remove("displaynone");
    alert2.classList.add("displaynone");
  } else {
    if (password.value == "" && repassword.value == "") {
      alert2.classList.remove("displaynone");
      alert1.classList.add("displaynone");
    } else {
      RegisterUser();
      alert1.classList.add("displaynone");
      //   location.href = "login.html";
    }
  }
});

async function RegisterUser() {
  var bodydata = {
    email: email.value,
    password: password.value,
  };
  var req = await fetch(
    "https://vijay-urlshortner-backend.herokuapp.com/users/register",
    {
      method: "POST",
      body: JSON.stringify(bodydata),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  var data = await req.json();
  var token = data.token;

  if (data.message != "User Already with same Registered Email-ID") {
    alert3.classList.remove("displaynone");
    localStorage.setItem("JWToken", `${token}Email${email.value}`);
  } else {
    alert(data.message);
  }
}
