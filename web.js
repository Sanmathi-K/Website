const wrapper=document.querySelector('.wrapper');
const indicator=[...document.querySelectorAll('.indicator button')]
let currentTestmonial=0;
indicator.forEach((item,i) =>{
    item.addEventListener('click',() =>{
        indicator[currentTestmonial].classList.remove('active');
        wrapper.style.marginLeft= `-${100*i}%`;
        item.classList.add('active');
        currentTestmonial=i;
    })
})
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
       
    })
    });
   

