const usersItems = `
<div id="item-list"></div>
`;

const displayUserItems = () => {
  $.get(`http://localhost:3000/api/user/my-items`, (data) => {
    const itemDataArray = Object.values(data);

    function returnItemData(arr) {
      for (let i = 0; i < arr.length; i++) {
        const itemData = arr[i];
        $("#item-list").append(
          `<div class="user-items-list">
            <h5 class="user-item-names">${itemData.itemName}</h5>
            <img src="${itemData.imgUrl}" class="item-img"></img>
                <p>Colour: ${itemData.itemColor}
                    <br>Size: ${itemData.dimensions}
                    <br>Amount: ${itemData.numberAvailable}
                    <br>Cost: ${itemData.costPerHire}
                    <br>Currently Available for hire: ${itemData.available}
                    <br>Item ID: ${itemData._id}
                </p>
          </div>`
        );
      }
    }
    returnItemData(itemDataArray);
  });
  return usersItems;
};

export default displayUserItems;
