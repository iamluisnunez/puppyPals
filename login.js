const submitButton = document.getElementById("submit");

let users = [
  { username: "admin", password: "1234" },
  { username: "user1", password: "1234" },
  { username: "user2", password: "1234" },
];

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let user = users.find(function (user) {
    return user.username === userName && user.password === password;
  });

  if (user) {
    console.log("Login Successful");
    window.location.href = "index.html";
    document.getElementById("myForm").reset();
  } else {
    console.log("Login not successful");
    document.getElementById("myForm").reset();
  }
});
