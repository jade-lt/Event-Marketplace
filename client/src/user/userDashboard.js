import hireItemForm from "../hireItemForm";

const userDashboard = `
    <div id="dashboard-header" class="container">
        <h1 class="header-text">Welcome Back!</h1>
    </div>
    <div id="dashboard-buttons">
    <button type="button" id="show-my-items" class="btn btn-outline-info">My Items</button>
    <button type="button" id="update-my-items" class="btn btn-outline-info">Edit My Items</button>
    </div>
`;

// $("#page-body").append(userDashboard);

const displayDashboard = () => {

    $(document).on("click", "#update-my-items", async (e) => {
        e.preventDefault();
        try {
            $("body").empty();
            $("body").append(hireItemForm());
          } catch (error) {
            $("body").append("<h6>Unable to load update form<h6>");
          }
    });

    // $(document).on("click", "#show-my-items", async (e) => {
    //     e.preventDefault();
    //     try {
    //         const myItems = $.ajax({
    //                 type: "GET",
    //                 url: "/api/user/my-items",
    //                 contentType: "application/json",
    //               });
    //         $("#page-body").append(myItems);
    //       } catch (error) {
    //         $("#page-body").append("<h6>Unable to load your items<h6>");
    //       }
    // });
    return userDashboard;
};

export default displayDashboard;



// // $("#page-body").append(myItems);

// const loginForm = `
// <form id="user-login">
//   <h4>Login</h4>
//     <div class="form-group">
//       <label for="username">Username</label>
//       <input type="text" class="form-control" placeholder="Enter your username" name="username">
//     </div>
//     <div class="form-group">
//       <label for="password">Password</label>
//       <input type="password" class="form-control" placeholder="Enter your password" name="password">
//     </div>
//     <button type="submit" class="btn btn-outline-info">Login</button>
//   </form>
//   <h5>Not a member? Register now!</h5>
//   <button id="user-registration" class="btn btn-outline-info">Register</button>
//   `;
