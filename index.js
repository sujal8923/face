let button = document.querySelector('#btn');
let istatus = document.querySelector('h2');
let check =0;
button.addEventListener('click',function(){
    if(check==0){
        button.style.backgroundColor = 'white'
        button.style.color = 'black';
        button.innerHTML='Remove friend'
        istatus.innerHTML='Friend';
        istatus.style.color='green';
        check =1;
    }
    else{
        button.style.backgroundColor = 'rgb(54, 54, 235)';
        button.style.color ='white'
        istatus.innerHTML='Stranger';
        istatus.style.color='red';
        button.innerHTML='Add friend'
        check =0;
    }
})