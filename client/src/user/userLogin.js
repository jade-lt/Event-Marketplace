import hireItemForm from "../hireItemForm";
import newUser from "./newUser";
import userDashboard from "./userDashboard";

const loginForm = `
<div class="container">
  <div class="row">
<div id="user-login" class="col-sm">
<form>
  <h4 class="section-heading">Login</h4>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" placeholder="Enter your username" name="username">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" placeholder="Enter your password" name="password">
    </div>
    <button type="submit" class="btn btn-outline-info">Login</button>
  </form>
  </div>
  <div id="register-now" class="col-sm">
  <h4 class="section-heading">Not a member?</h5>
  <button id="user-registration" class="btn btn-outline-info">Sign Up</button>
  </div>
  </div>
  
 
  `;

const userLogin = () => {
  $(document).on("submit", "#user-login", async (e) => {
    e.preventDefault();

    const formData = {
      userName: $("input[name='username']").val(),
      password: $("input[name='password']").val(),
    };
    try {
      const res = await $.ajax({
        type: "POST",
        url: "/api/user/login",
        contentType: "application/json",
        data: JSON.stringify(formData),
      });
      $("body").empty();
      $("body").append(userDashboard());
    } catch (error) {
      alert("Username or Password is incorrect");
      // $("body").append("<h6>Username or Password is incorrect<h6>");
    }
  });
  return loginForm;
};

$(document).on("click", "#user-registration", () => {
  $("body").empty();
  $("body").append(newUser());
});

export default userLogin;
