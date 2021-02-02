import userLogin from "./userLogin";

const registrationForm = `
<div id="register-header" class="container">
<h1 class="header-text">Register Now</h1>
</div>
<div id="new-user-div"
<form id="new-user">
  <h4>Register</h4>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" placeholder="Enter a username" name="username">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" placeholder="Enter a password" name="password">
    </div>
    <button type="submit" class="btn btn-outline-info">Register</button>
  </form>
  </div
  `;

const newUser = () => {
  $(document).on("submit", "#new-user", async (e) => {
    e.preventDefault();

    const formData = {
      userName: $("input[name='username']").val(),
      password: $("input[name='password']").val(),
    };
    try {
      const res = await $.ajax({
        type: "POST",
        url: "/api/user/register",
        contentType: "application/json",
        data: JSON.stringify(formData),
      });
      $("body").empty();
      $("body").append(userLogin());
    } catch (error) {
      $("body").append("<h6>Unable to create new user<h6>");
    }
  });
  return registrationForm;
};

export default newUser;
