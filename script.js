async function getWeather(){
let inputValue =  document.querySelector('#searchCity').value;
let city =  document.querySelector('#city');

let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputValue+ '&appid=&units=metric&lang=fr')
if(response.ok){
let json = await response.json(); 
let desc = json.weather[0].description;
let wind = json.wind.speed;
let temp = Math.round(json.main.temp);
let feels_like =  Math.round(json.main.feels_like);

let tempText = document.querySelector('#temp');
tempText.textContent = temp  + (' °C');

let feelText = document.querySelector('#feeling');
feelText.textContent = feels_like + (' °C');

let descText = document.querySelector('#desc');
descText.textContent = desc;

let windText = document.querySelector('#wind');
windText.textContent = wind  + (' km/h');

whatToDo(feels_like)
}
else {
    let tempText = document.querySelector('#temp');
    tempText.textContent = 'Ville inconnue';
}
}

function whatToDo(tempFeel) {
let introAdvice = document.querySelector('#introTextAdvice');
let textAdvice = document.querySelector('#textAdvice');

    if(tempFeel>=33) {

        textAdvice.textContent='Dans la mesure du possible, restez dans un endroit frais et hydratez vous régulièrement.';
        console.log('chaud')
    }
    else if(tempFeel<33 && tempFeel>=26) {

        textAdvice.textContent='Si vous aimez profiter de ce genre de température, profitez-en pour faire vos activités outdoor favorites ! N\'oubliez pas de vous hydratez.';
        console.log('assez chaud')
    }

    else if(tempFeel<26 && tempFeel>=20) {

        textAdvice.textContent='Vous pouvez porter un léger gilet afin de prévoir les petites fraîcheurs inattendues.';
        console.log('agréable')
    }

    else if(tempFeel<20 && tempFeel>=14) {

        textAdvice.textContent='N\'oubliez pas de prévoir votre petite laine pour ne pas être pris au dépourvu si la température vient à baisser. ';
        console.log('refroidi')
    }

    
    else if(tempFeel<14 && tempFeel>=8) {

        textAdvice.textContent='Un manteau ou un bon gilet vous sera utile si vous restez longtemps à l\'extérieur. ';
        console.log('un peu froid')
    }

    else if(tempFeel<8 && tempFeel>=1) {

        textAdvice.textContent='Mettez un manteau chaud, il sera votre meilleur ami avec ces températures ! ';
        console.log('froid')
    }

    else{
        textAdvice.textContent='Brrr ! Mettez vos vêtements les plus chauds pour affrontez le froid ! Une fois rentré chez vous, une bonne boisson chaude vous fera le plus grand bien ! ';  
    }
}