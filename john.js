function force() {
    standard = document.getElementById("standard");
    Item = document.getElementById("foodsel");
    countBox = document.getElementById("count");
    ShoppingList = ["Oranges", "Juice", "Bacon", "Skittles"];
    showcase();
}

function showcase() {
    standard.innerHTML = "1) " + ShoppingList[0];
    for (let f = 1; f < ShoppingList.length; f++){
        standard.innerHTML += "<br />" + (f+1) + ") " + ShoppingList[f];
    }
}

function indxsOf(array, items) {
    let idexList = [];

    for (let f = 0; f < array.length; f++)
        if (items === array[f])
            idexList.push(f);
    return idexList;
}

function Addanitem() {
    if(!ShoppingList.includes(Item.value)){
        ShoppingList.push(Item.value);
        showcase();
    }
}


function DeleteanItem() {
    if(ShoppingList.includes(Item.value)){
        ShoppingList.splice(indxsOf(ShoppingList, Item.value), 1);
        showcase();
    }
}

function MoveUpandMoveDown(frontal_indexP) {
    let past_index = parseInt(Item.value);
    let frontal_index = past_index + parseInt(frontal_indexP);
    if(frontal_index < 0){
        return;
    }
    if(frontal_index > ShoppingList.length-1){
        frontal_index--;
        return;
    }
    ShoppingList.splice(frontal_index, 0, ShoppingList.splice(past_index, 1)[0]);
    Item.value = frontal_index;
    showcase();
};