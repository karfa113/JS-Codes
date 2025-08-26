const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const guide = document.querySelector('#bmi-category')

    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height`
    }else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight`
    }else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
            guide.innerHTML = `Under Weight`
        }else if(bmi >= 18.6 && bmi <= 24.9){
            guide.innerHTML = `Normal Range`
        }else{
            guide.innerHTML = `Overweight`
        }
    }
})