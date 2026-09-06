const button = document.querySelector('.Calculate-Button');

button.addEventListener('click', () => {

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (height === '' && weight === '') {
        result.value = 'Enter values';

    } else if (height === '' || isNaN(Number(height)) || Number(height) <= 0) {
        result.value = 'Invalid height';

    } else if (weight === '' || isNaN(Number(weight)) || Number(weight) <= 0) {
        result.value = 'Invalid weight';

    } else {
        const BMI = (Number(weight) / (Number(height) * Number(height))) * 10000;

        result.value = BMI.toFixed(2);
    }
});

