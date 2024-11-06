let pageChanger = false;

let rateNum = document.querySelector('.rateNum')
let num =  document.querySelectorAll('.num').forEach((num)=>{
    num.addEventListener('click',()=>{
        console.log('num', num.innerHTML)
        rateNum.innerHTML = num.innerHTML;
        pageChanger = true;
      
    })
});
let ratingPage = document.querySelector('.ratingPage')
let thankYouPage = document.querySelector('.thankYouPage')
let submit = document.querySelector('.submit');

submit.addEventListener('click',()=>{
    if(pageChanger){
        ratingPage.classList.add('none')
        thankYouPage.classList.remove('none')
    }else{
        alert('Please select a number')
    }
})