const promptbtn = document.getElementById("promptbtn");
promptbtn.addEventListener("click",() => {
    alert("Усі слова в опитуванні писати українською програма приймає лише одне слово")
    const name = prompt("Як тебе звати?");
    alert("Вітаємо " + name + "!")
    const strAge = prompt("Скільки тобі років?");
    const age = Number(strAge)
    if(age >= 10){
        alert("Проходь не затримуйся");
    } else if(age >= 14){
        alert("Ти малий але прохід дозволяю");
    } else if(age < 5){
        alert("Тобі сюди не можна");
        window.location.href = "404.html";
    } else{
        alert("Неправильно вказаний вік")
    }
    const region = prompt("Де живеш? Який регіон?")
    if(region === "Суми" || region === "Харків" || region === "Чернігів" || region === "Донецьк" || region === "Луганськ"){
        alert("Ти зі сходної України")
    } else if(region === "Київ" || region === "Полтава" || region === "Черкаси" || region === "Житомир"){
            alert("Ти з центральної України")
    } else if(region === "Львів" || region === "Чернівці" || region === "Івано-Франківськ" || region === "Ужгород"){
                alert("Ти зі заходу України")
    }
    const trips = prompt("Куди хочеш подорожувати?")
    if (trips === "Карпати" || trips === "Львів" || trips === "Івано-Франківськ") {
        alert("Ти любиш гори та культурну атмосферу!")
    } else if (trips === "Одеса" || trips === "Миколаїв" || trips === "Херсон") {
            alert("Ти хочеш на море та сонце!")
        } else if (trips === "Київ" || trips === "Харків" || trips === "Дніпро") {
            alert("Тебе цікавить урбаністика та великі міста!")
        } else if( trips === "Суми" || trips === "Харків" || trips === "Полтава") {
            alert("Ти цінуєш історію свого краю, похвально")
        } else {
        alert("Це цікаве місце для подорожі!")
    }
    const plans = prompt("Які плани на життя?")
    if (plans === "Навчання" || plans === "Університет") {
        alert("Навчання — чудовий вибір для розвитку!")
    } else if (plans === "Переїхати за кордон" || plans === "Еміграція") {
        alert("Бажаєш нових можливостей у світі — це серйозне рішення.")
    } else if (plans === "Знайти роботу" || plans === "Побудувати кар'єру") {
        alert("Успіхів у професійному розвитку!")
    } else if (plans === "Завести сім'ю" || plans === "Діти") {
        alert("Сімейні цінності — це важливо ❤️")
    } else {
        alert("Цікаві плани! Головне — рухайся вперед.")
    }

});