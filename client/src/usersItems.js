const usersItems = `
<div id="item-list"></div>
`;

const displayUserItems = () => {
  $.get(`http://localhost:3000/api/user/my-items`, (data) => {
    console.log(data);

    const itemDataArray = Object.values(data);

    // console.log(itemData);

    function returnItemData(arr) {
      for (let i = 0; i < arr.length; i++) {
        const itemData = arr[i];
        console.log(itemData);
        $("#item-list").append(
          `<div class="user-items-list"><h5 class="user-item-names">${itemData.itemName}</h5><p>Colour: ${itemData.itemColor}<br>Size: ${itemData.dimensions}<br>Amount: ${itemData.numberAvailable}<br>Cost: ${itemData.costPerHire}<br>Currently Available for hire: ${itemData.available}<br>Category: ${itemData.categoryId}<br>Item ID: ${itemData._id}<br></p></div>`
        );
      }
    }
    // add to the function an html tag that appends to the right section of the items div

    console.log(returnItemData(itemDataArray));

  });
  return usersItems;
};

export default displayUserItems;
