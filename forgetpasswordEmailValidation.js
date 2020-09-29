var btn = document.getElementById("btn");
var alert1 = document.querySelector(".alert1");
var alert2 = document.querySelector(".alert2");

btn.addEventListener("click", () => {
  ValidateEmail();
});
async function ValidateEmail() {
  alert2.classList.add("displaynone");
  alert1.classList.add("displaynone");
  var email = document.getElementById("email");
  var bodydata = { email: email.value };

  var req = await fetch(
    "https://urlshortner-backend-assignment.herokuapp.com/user/forgotpassword",
    {
      method: "POST",
      body: JSON.stringify(bodydata),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  var data = await req.json();

  if (data.message == "User Present") {
    alert1.classList.add("displaynone");
    localStorage.setItem("ValidateEmail", email.value);
    localStorage.setItem("ValidatepasswordToken", `${data.token}`);
    alert2.classList.remove("displaynone");
    location.href = "validationforforgetpassword.html";
  } else {
    alert2.classList.add("displaynone");
    alert1.classList.remove("displaynone");
  }
}
