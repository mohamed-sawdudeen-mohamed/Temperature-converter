const kelvinInputEl = document.getElementById('kelvin');
const celciusInputEl = document.getElementById('celcius');
const fahrenheitInputEl = document.getElementById('fahrenheit');


function tempConversion (value, unit){
    let kVal = 0;
    let cVal = 0;
    let fVal = 0;

    if(unit === 'k'){
        kVal = value;
        cVal = value - 273.15;
        fVal = (value - 273.15) *9/5 + 32;
    }

    if(unit === 'c'){
        kVal = value + 273.15;
        cVal = value;
        fVal = (value * 9) / 5 + 32;
    }

    if(unit === 'f'){
        kVal = cVal + 273.15
        cVal = ((value - 32) * 5 ) / 9; 
        fVal = value;
    }

    kelvinInputEl.value = kVal;
    celciusInputEl.value = cVal;
    fahrenheitInputEl.value = fVal;
}

kelvinInputEl.addEventListener('keyup', (e) =>{
    const value = parseFloat(kelvinInputEl.value);
    tempConversion(isNaN(value) ? 0 : value, 'k')
})

celciusInputEl.addEventListener('keyup', (e) =>{
    const value = parseFloat(celciusInputEl.value);
    tempConversion(isNaN(value) ? 0 : value, 'c')
})

fahrenheitInputEl.addEventListener('keyup', (e)=>{
    const value = parseFloat(fahrenheitInputEl.value);
    tempConversion(isNaN(value) ? 0 : value, 'f')
})