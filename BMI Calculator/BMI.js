const button = document.querySelector('.Calculate-Button')

button.addEventListener('click', () => {

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result')


    if(height === '' || height === isNaN(height) || height < 0) {
        result.value = "Invalid height"
    } else if (weight  === '' || weight === isNaN(weight) || weight < 0){
        result.value = "Invalid Weight"
    } else {
        const BMI = (weight / (height * height)) * 10000
        result.value = BMI.toFixed(2)
    }
});

