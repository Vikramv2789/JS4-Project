function force() {
    standard = document.getElementById("standard");
    Item = document.getElementById("foodsel");
    countBox = document.getElementById("count");
    ShoppingList = ["Oranges", "Juice", "Bacon"];
    showcase();
}

function showcase() {
    standard.innerHTML = "1) " + ShoppingList[0];
    for (let f = 1; f < ShoppingList.length; f++){
        standard.innerHTML += "<br />" + (f+1) + ") " + ShoppingList[f];
    }
}

function indexesOf(array, itm) {
    let idxList = [];

    for (let f = 0; f < array.length; f++)
        if (itm === array[f])
            idxList.push(f);
    return idxList;
}

function Addanitem() {
    if(!ShoppingList.includes(Item.value)){
        ShoppingList.push(Item.value);
        showcase();
    }
}


function DeleteanItem() {
    if(ShoppingList.includes(Item.value)){
        ShoppingList.splice(indexesOf(ShoppingList, Item.value), 1);
        showcase();
    }
}

function MoveUpandMoveDown(new_indexP) {
    let old_index = parseInt(Item.value);
    let new_index = old_index + parseInt(new_indexP);
    if(new_index < 0){
        return;
    }
    if(new_index > ShoppingList.length-1){
        new_index--;
        return;
    }
    ShoppingList.splice(new_index, 0, ShoppingList.splice(old_index, 1)[0]);
    Item.value = new_index;
    showcase();
};
