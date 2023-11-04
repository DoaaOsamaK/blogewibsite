let stars= document.getElementById('stars');
let moon= document.getElementById('moon');
let mountains3= document.getElementById('mountains3');
let mountains4= document.getElementById('mountains4');
let river5= document.getElementById('river');
let boat6= document.getElementById('boat');
let doaa= document.querySelector('.doaa');
window.onscroll=function(){
    let value= scrollY;
        stars.style.left= value +'px';
        moon.style.top = value*3+'px';
        mountains3.style.top = value*2+'px';
        mountains4.style.top = value*1.2+'px';
        boat6.style.left = value+'px';
        boat6.style.top = value+'px';
        doaa.style.fontSize=value+'px';
        if (scrollY >= 100) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
        }
        

    
}