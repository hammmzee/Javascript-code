const button = document.querySelector('.Calculate-Button')

button.addEventListener('click', () => {

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result')


    if(height === '' || isNaN(Number(height)) || height < 0) {
        result.value = "Invalid height"
    } else if (weight  === '' || isNaN(Number(weight)) || weight < 0){
        result.value = "Invalid Weight"
    } else {
        const BMI = (Number(weight) / (Number(height) * Number(height))) * 10000;
        result.value = BMI.toFixed(2)
    }
});

