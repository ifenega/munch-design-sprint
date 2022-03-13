

//toggle
const button = document.querySelector(".toggle")
const navigation = document.querySelector(".navigation");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");





button.addEventListener('click', ()=> {
    console.log(icon1)
    console.log(icon2)
    button.classList.toggle('active');
    navigation.classList.toggle('active');
    icon1.classList.toggle('active');
    icon2.classList.toggle('active');
})