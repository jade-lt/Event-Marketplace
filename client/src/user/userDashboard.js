import hireItemForm from "../hireItemForm";

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
  
   
`;

const displayDashboard = () => {
  // $.get(`http://localhost:3000/api/user/my-items`, (data) => {
  //       console.log(data);

  //     const itemName = data[0].itemName;
  //       console.log(itemName);
  //       $("#test").html(`This is the item name ${itemName}`);

  // });

  $(document).ready(function () {
    $("#update-items").append(hireItemForm());
  });
  return userDashboard;
};

export default displayDashboard;
