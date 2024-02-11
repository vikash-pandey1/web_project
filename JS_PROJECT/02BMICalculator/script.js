const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault(); // use to prevent auto submit
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#results');
    if (height === '' || height <0 || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`
    }else if (weight === '' || weight <0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`
    }else{
        const bmi = (weight /((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML = `<span>${bmi}</span> <span>you are under weight</span>`
        }else if(bmi>18.6 && bmi<24.9){
            result.innerHTML = `<span>${bmi}</span> <span>you are normal range</span>`
        }else{
            result.innerHTML = `<span>${bmi}</span> <span>you are over weight</span>`
        }
        
        
    }
    

})