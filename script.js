/* Counter */
const counters = document.querySelectorAll('.number');
const speed = 900;

counters.forEach(number => {
    const updateCount = () => {
        const target = +number.getAttribute('data-target');
        const count = +number.innerText;

        const inc = target / speed;

        if(count < target){
            number.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1,'+')
        }else{
            count.innerText = target;
        }
    }
    updateCount();
});

/* Slide Toggle */
var slide = document.getElementById('slider');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

btn1.onclick = function(){
    slide.style.transform = "translate(0px)";
    btn1.classList.add("active1");
    btn2.classList.remove("active1");
}

btn2.onclick = function(){
    slide.style.transform = "translate(-56%)";
    btn2.classList.add("active1");
    btn1.classList.remove("active1");
}


