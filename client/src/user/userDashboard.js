import hireItemForm from "../hireItemForm";
import usersItems from "../usersItems";

const userDashboard = `
    <div id="dashboard-header" class="container">
        <h1 class="header-text">Welcome Back!</h1>
    </div>
    <div class="container">
        <div class="row">
            <div id="user-items" class="col-sm">
                <h1>My Listings</h1>
                <h4 id ="my-items-body"></h4>
            </div>
            <div id="update-items" class="col-sm">
                <h1>Update a Listing</h1>
                <h4 id ="update-items-body"></h4>
            </div>
        </div>
    </div>
  
   
`;

const displayDashboard = () => {
  $(document).ready(function () {
    $("#update-items").append(hireItemForm());
    $("#user-items").append(usersItems());
  });
  return userDashboard;
};

export default displayDashboard;
