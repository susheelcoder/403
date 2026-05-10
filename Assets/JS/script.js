// Assets/JS/script.js

// =========================================
// SELECT ELEMENTS
// =========================================

const loginPage =
  document.getElementById("loginPage");

const signupPage =
  document.getElementById("signupPage");

const forgotPage =
  document.getElementById("forgotPage");

const message =
  document.getElementById("message");



// =========================================
// PAGE SWITCH
// =========================================

function showPage(pageId) {

  const pages =
    document.querySelectorAll(".box");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const activePage =
    document.getElementById(pageId);

  if (activePage) {
    activePage.classList.add("active");
  }

  // CLEAR MESSAGE
  if (message) {

    message.innerHTML = "";

    message.className = "message";

  }

}

// =========================================
// SHOW MESSAGE
// =========================================

function showMessage(text, type) {

  if (!message) return;

  message.innerHTML = text;

  message.className =
    `message ${type}`;

}

// =========================================
// LOGIN FORM
// =========================================

if (loginPage) {

  const loginForm =
    loginPage.querySelector("form");

  loginForm.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();

      const email =
        loginForm
          .querySelector(
            'input[type="email"]'
          )
          .value
          .trim();

      const password =
        loginForm
          .querySelector(
            'input[type="password"]'
          )
          .value
          .trim();

      // CHECK USER
      const user =
        users.find(
          (u) =>
            u.email === email &&
            u.password === password
        );

      if (user) {

        // SAVE LOGIN
        localStorage.setItem(
          "isLogin",
          "true"
        );

        localStorage.setItem(
          "userEmail",
          user.email
        );

        localStorage.setItem(
          "currentUser",
          JSON.stringify(user)
        );

        showMessage(
          `Welcome ${user.name} 🚀`,
          "success"
        );

        // REDIRECT
        const redirectPage =
          localStorage.getItem(
            "redirectPage"
          ) || "index.html";

        setTimeout(() => {

          window.location.href =
            redirectPage;

        }, 1000);

      } else {

        showMessage(
          "Invalid Email or Password ❌",
          "error"
        );

      }

    }
  );

}

// =========================================
// SIGNUP FORM
// =========================================

if (signupPage) {

  const signupForm =
    signupPage.querySelector("form");

  signupForm.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();

      const inputs =
        signupForm.querySelectorAll("input");

      const name =
        inputs[0].value.trim();

      const email =
        inputs[1].value.trim();

      const password =
        inputs[2].value.trim();

      // CHECK EXISTING EMAIL
      const existingUser =
        users.find(
          (u) => u.email === email
        );

      if (existingUser) {

        showMessage(
          "Email already exists ❌",
          "error"
        );

        return;

      }

      // CREATE USER
      const newUser = {

        id: users.length + 1,

        name,

        email,

        password,

        role

      };

      // SAVE USER
      users.push(newUser);

      console.log(
        "New User:",
        newUser
      );

      // AUTO LOGIN
      localStorage.setItem(
        "isLogin",
        "true"
      );

      localStorage.setItem(
        "userEmail",
        newUser.email
      );

      localStorage.setItem(
        "currentUser",
        JSON.stringify(newUser)
      );

      showMessage(
        "Account Created Successfully 🎉",
        "success"
      );

      signupForm.reset();

      setTimeout(() => {

        window.location.href =
          "index.html";

      }, 1000);

    }
  );

}

// =========================================
// FORGOT PASSWORD
// =========================================

if (forgotPage) {

  const forgotForm =
    forgotPage.querySelector("form");

  forgotForm.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();

      const email =
        forgotForm
          .querySelector(
            'input[type="email"]'
          )
          .value
          .trim();

      const user =
        users.find(
          (u) => u.email === email
        );

      if (user) {

        showMessage(
          `Reset link sent to ${email} 📩`,
          "success"
        );

      } else {

        showMessage(
          "Email not found ❌",
          "error"
        );

      }

    }
  );

}

// =========================================
// CHECK LOGIN
// =========================================

const isLogin =
  localStorage.getItem("isLogin");

// PROTECT HOME PAGE
if (
  window.location.pathname.includes(
    "index.html"
  ) &&
  isLogin !== "true"
) {

  localStorage.setItem(
    "redirectPage",
    window.location.href
  );

  window.location.href =
    "login.html";

}

// =========================================
// SHOW USER EMAIL
// =========================================

const userEmail =
  document.getElementById("userEmail");

const currentUser =
  JSON.parse(
    localStorage.getItem(
      "currentUser"
    )
  );

if (userEmail && currentUser) {

  userEmail.innerHTML =
    currentUser.email;

}

// =========================================
// LOGOUT
// =========================================

function logout() {

  localStorage.removeItem(
    "isLogin"
  );

  localStorage.removeItem(
    "userEmail"
  );

  localStorage.removeItem(
    "currentUser"
  );

  localStorage.removeItem(
    "redirectPage"
  );

  alert(
    "Logout Successful 👋"
  );

  window.location.href =
    "login.html";

}












