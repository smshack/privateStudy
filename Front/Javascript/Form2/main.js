'use strict';

const inputbox= document.querySelector('#value');

inputbox.addEventListener('keydown',(event)=>{
    if(event.key =='Enter'){
        filter(inputbox.value);
    }
})



function filter(value){
    const profile =document.querySelectorAll('.profile');
    for(let i=0;i<profile.length;i++){
        let name =profile[i].querySelector('.name');
        // console.log(name.innerHTML);
        if(name.innerHTML.indexOf(value) != -1){
            profile[i].style.display ="flex";
        }else{
            profile[i].style.display ="none";
        }
    }
    // for(let i=0; profile.length;i++){
    //     let name =profile[i].querySelector('.name');
    //     if(name[0].innerHTML.indexOf(value) >-1){
    //         profile[i].style.display ="flex";
    //     }else{
    //         profile[i].style.display ="none";
    //     }
    // }
}