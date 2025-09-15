const typewriter = document.getElementById('typewriter')

const text = ["Amazing Grace Worship Centre." , "Peace On Earth." ];
const speed = 100;
const erasingSpeed = 100;
const delayBetweenTexts = 1500;
let index = 0;
let charIndex = 0;

function type(){
    
    if (charIndex < text[index].length){
        typewriter.textContent += text[index].charAt(charIndex);
        typewriter.style.color = "#d5a6bd"; //Color to be changed
        typewriter.style.fontFamily = "Arial, Helvetica, sans-serif";
        typewriter.style.fontWeight = 'bold'
        charIndex++;
        setTimeout(type,speed);
    }else{
        setTimeout(erase,delayBetweenTexts)
    }
}
function erase(){
    if (charIndex >0 ){
        typewriter.textContent = text[index].substring(0, charIndex - 1)
        charIndex -- ;
        setTimeout(erase, erasingSpeed);
    }else{
        index = (index + 1) % text.length;
        setTimeout(type, speed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenTexts);
});


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click',() =>{
    navLinks.classList.toggle('active');
});


const Feb = document.getElementById("February");
const March = document.getElementById("March");
const April = document.getElementById("April");
const May = document.getElementById("May");
const June = document.getElementById("June");
const July = document.getElementById("July");
const August = document.getElementById("August");
const Sept = document.getElementById("Sept");
const Oct = document.getElementById("Oct");
const Nov = document.getElementById("Nov");
const Dec = document.getElementById("Dec");
const Jan26 = document.getElementById("Jan26");
const Jan = document.getElementById("Jan");

// the months
const myDate = new Date().getMonth();
const myNextYearDate = new Date().getMonth();

// The year
const oldDate = new Date().getFullYear();
const newDate = new Date().getFullYear();

// Moths Arrays
const myMonths = ["No Data",Feb,March,April,May,June,July,August,Sept,Oct,Nov,Dec];
const theYear = [Jan26,"NoMonth"];

if(oldDate == 2025){
        switch(true){
        case myDate == myMonths.indexOf("No Data"):
                Jan.textContent ="THE MONTH IS JANUARY. NO DATA AVAILABLE AT THE MOMENT ";
                Jan.style.textAlign= "center";
                Jan.style.display = "Block";
                break;
        case myDate == myMonths.indexOf(Feb):
                Feb.style.display = "block";
                break;
        case myDate==myMonths.indexOf(March):
                March.style.display = "block";
                break;
        case myDate==myMonths.indexOf(April):
                April.style.display = "block";
                break;
        case myDate == myMonths.indexOf(May):
                May.style.display = "block";
                break;
        case myDate == myMonths.indexOf(June):
                June.style.display = "block";
                break;
        case myDate == myMonths.indexOf(July):
                July.style.display ="Block";
                break;
        case myDate == myMonths.indexOf(August):
                August.style.display ="block";
                break;
        case myDate ==myMonths.indexOf(Sept):
                Sept.style.display ="block";
                break;
        case myDate == myMonths.indexOf(Oct):
                Oct.style.display = "block";
                break;
        case myDate == myMonths.indexOf(Nov):
                Nov.style.display ="block";
                break;
        case myDate == myMonths.indexOf(Dec):
                Dec.style.display ="block";
                break;
        case myNextYearDate == theYear.indexOf(Jan26):
                Jan26.style.display ="block";
                break;

        default:
            console.error("NO MONTH OF ZERO");
    }
}else if(newDate == 2026){
        // For the year 2026
    switch(true){
        case myNextYearDate == theYear.indexOf("NoMonth"):
            break;
        case myNextYearDate == theYear.indexOf(Jan26):
            Jan26.style.display = "block";
            break;
        default:
                break;
    }
}