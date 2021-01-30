

const displayUserItems = () => {
    $.get(`http://localhost:3000/api/user/my-items`, (data) => {
    console.log(data);

    // const itemCategory = data[0].categoryId;
    const itemId = data[0]._id;
    const itemName = data[0].itemName;
    const itemColor = data[0].itemColor;
    const itemSize = data[0].dimensions;
    const amount = data[0].numberAvailable;
    const itemCost = data[0].costPerHire;
    const itemAvailability = data[0].available;

    console.log(itemName);
    });
};

export default displayUserItems;