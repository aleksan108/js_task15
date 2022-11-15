
const generateButton = document.getElementById('generateButton');
const value1 = document.getElementById('ivalue1');
const resultID = document.getElementsByClassName('input_result');
let arr = [];

generateButton.addEventListener("click", convertInput);
value1.addEventListener("keypress", function(event){
    if (event.key ==="Enter"){
        event.preventDefault();
        convertInput();
    }
});

function convertInput(){
    for (let i = 0; i < 10; i++){
        arr[i] = Math.round((Math.random())*20)-10;
    }

    resultID[0].value = arr.join();
    let otherValues = defineValues(arr);
    for (let i = 0; i<5; i++){
        resultID[i+1].value = otherValues[i];
    }

}

function defineValues(array){
    let min = array[0];
    let max = array[0];
    let sum = array[0];
    let mult = array[0];
    for (let i = 1; i< array.length; i++){
        if (min > array[i]){
            min = array[i];
        }
        if (max < array[i]){
            max = array[i];
        }
        sum = sum+array[i];
        mult = mult*array[i];
    }

    return [min,max,sum/array.length,sum,mult];
}




