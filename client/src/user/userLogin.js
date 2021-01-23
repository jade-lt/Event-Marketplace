import hireItems from "../hireItems";

const hireForm = 
`<form id="user-login">
  <h2>Login</h2>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" placeholder="Enter your username" name="username">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" placeholder="Enter your password" name="password">
    </div>
    <button type="submit" class="btn btn-outline-info">Submit</button>
  </form>
  <h2>Not already a member? Register now</h2>
  <button id="user-registration" class="btn btn-outline-info">Register</button>
  `;

  const userLogin = () => {
      $(document).on("submit", "#user-login", async (event) => {
          event.preventDefault();

          const formData = {
              userName: $("input[name='userName']").val(),
              password: $("input[name='password']").val()
          };
          try {
              const res = await $.ajax({
                  type: "POST",
                  url: "/user/login",
                  contentType: "application/JSON",
                  data: JSON.stringify(formData),
              });
              $("body").empty();
              $("body").append(hireItems()); 
          } catch(error) {
              $("body").append("<h3>Username or Password is incorrect<h3>");
          }
      });
      return hireForm;
  };

  