import userDashboard from "./user/userDashboard";

const hireItemForm = `
<form id="hire-item-form">
    <div class="form-group">
      <label for="item-name">Item</label>
      <input type="text" class="form-control" id="name" placeholder="Item name" name="item-name">
    </div>
    <div class="form-group">
      <label for="color">Colour</label>
      <input type="text" class="form-control" id="color" placeholder="Item colour" name="item-color">
    </div>
    <div class="form-group">
      <label for="size">Size</label>
      <input type="text" class="form-control" id="size" placeholder="Item dimensions" name="item-size">
    </div>
    <div class="form-group">
      <label for="amount">Amount</label>
      <input type="text" class="form-control" id="amount" placeholder="Number available" name="amount">
    </div>
    <div class="form-group">
      <label for="cost">Cost</label>
      <input type="text" class="form-control" id="cost" placeholder="Cost per hire" name="cost">
    </div>
    <fieldset class="form-group">
      <legend class="col-form-label">Currently available?</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" id="availableYes" name ="available" value="true">
        <label class="form-check-label" for="availableYes">Yes</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" id="availableNo" name ="available" value="false">
      <label class="form-check-label" for="availableNo">No</label>
    </div>
    </fieldset>
    <div class="form-group">
    <label for="categoryId">Category</label>
    <select name="categoryId" id="categories"></select>
  </div>
    <div class="form-group">
      <label for="item-id">ID</label>
      <input type="text" class="form-control" id="item-id" placeholder="*Only enter an ID when updating or deleting*" name="item-id">
  </div>
    <button type="button" id="create-item" class="btn btn-outline-info">Add</button>
    <button type="button" id="update-item" class="btn btn-outline-info">Update</button>
    <button type="button" id="delete-item" class="btn btn-outline-info">Delete</button>
  </form>
`;

const newHireItem = () => {

  $(document).on("click", "#create-item", async (e) => {
    e.preventDefault();

    const reqBody = {
      categoryId: $("#categories").val(),
      itemName: $("#name").val(),
      itemColor: $("#color").val(),
      dimensions: $("#size").val(),
      numberAvailable: $("#amount").val(),
      costPerHire: $("#cost").val(),
      available: $(`input[name="available"]:checked`).val(),
    };

    const res = await $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/hire-items/new-hire-item",
      contentType: "application/json",
      data: JSON.stringify(reqBody),
    });
  });

  $(document).on("click", "#update-item", async (e) => {
    e.preventDefault();

    const reqBody = {
      categoryId: $("#categories").val(),
      itemName: $("#name").val(),
      itemColor: $("#color").val(),
      dimensions: $("#size").val(),
      numberAvailable: $("#amount").val(),
      costPerHire: $("#cost").val(),
      available: $(`input[name="available"]:checked`).val(),
    };

    const res = await $.ajax({
      type: "PATCH",
      url: `http://localhost:3000/api/hire-items/update-item/${$("#item-id").val()}`,
      contentType: "application/json",
      data: JSON.stringify(reqBody),
    });
  });

  $(document).on("click", "#delete-item", async (e) => {
    e.preventDefault();

    const res = await $.ajax({
      type: "DELETE",
      url: `http://localhost:3000/api/hire-items/delete-item/${$("#item-id").val()}`,
      contentType: "application/json",
    });
  });

  return hireItemForm;
};

export default newHireItem;