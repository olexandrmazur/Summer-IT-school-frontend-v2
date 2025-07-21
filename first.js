const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const text = document.getElementById("text");
one.addEventListener("click",()=>{
    text.innerHTML = "Результат: " + one.id + " Правда";
});
two.addEventListener("click",()=>{
    text.innerHTML = "Результат: " + two.id + " Брехня";
});
three.addEventListener("click",()=>{
    text.innerHTML = "Результат: " + three.id + " Правда";
});
four.addEventListener("click",()=>{
    text.innerHTML = "Результат: " + four.id + " Правда";
});