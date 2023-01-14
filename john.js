function force() {
    standard = document.getElementById("standard");
    foodSelectionBox = document.getElementById("foodsel");
    countBox = document.getElementById("count");
    ShoppingList = ["Oranges", "Juice", "Bacon"];
    showcase();
}

function showcase() {
    standard.innerHTML = "1) " + ShoppingList[0];
    for (let i = 1; i < ShoppingList.length; i++){
        standard.innerHTML += "<br />" + (i+1) + ") " + ShoppingList[i];
    }
}

function indexesOf(array, itm) {
    let idxList = [];

    for (let i = 0; i < array.length; i++)
        if (itm === array[i])
            idxList.push(i);
    return idxList;
}

function Addanitem() {
    if(!ShoppingList.includes(foodSelectionBox.value)){
        ShoppingList.push(foodSelectionBox.value);
        showcase();
    }
}


function DeleteanItem() {
    if(ShoppingList.includes(foodSelectionBox.value)){
        ShoppingList.splice(indexesOf(ShoppingList, foodSelectionBox.value), 1);
        showcase();
    }
}

function MoveUpandMoveDown(new_indexP) {
    let old_index = parseInt(foodSelectionBox.value);
    let new_index = old_index + parseInt(new_indexP);
    if(new_index < 0){
        return;
    }
    if(new_index > ShoppingList.length-1){
        new_index--;
        return;
    }
    ShoppingList.splice(new_index, 0, ShoppingList.splice(old_index, 1)[0]);
    foodSelectionBox.value = new_index;
    showcase();
};