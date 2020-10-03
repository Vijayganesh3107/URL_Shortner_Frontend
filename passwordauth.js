var email = localStorage.getItem("ValidateEmail");
var passwordtoken = localStorage.getItem("PasswordToken");

async function AuthPassword() {
  var req = await fetch(
    `https://vijay-urlshortner-backend.herokuapp.com/user/changepassword/${email}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  var data = await req.json();
  console.log(data);

  if (data.message == "Sucess") location.href = "changepassword.html";
  else alert(data.message);
}
AuthPassword();
