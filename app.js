let toggle = 1 ;
const button = document.querySelector('.main-btm');
const result = document.querySelector('.result');
const box = document.querySelectorAll('.box');
const col1 = document.querySelectorAll('.c1');
const col2 = document.querySelectorAll('.c2');
const col3 = document.querySelectorAll('.c3');
const row1 = document.querySelectorAll('.r1');
const row2 = document.querySelectorAll('.r2');
const row3 = document.querySelectorAll('.r3');
const alt = document.querySelectorAll('.alt');
const ctrl=document.querySelectorAll('.ctrl');

for ( let x= 0 ; x<box.length ; x++){
    
    box[x].addEventListener('click',function(e){
        e.preventDefault();
        if (box[x].innerHTML=='' && toggle == 1 && result.innerHTML==''){
            box[x].innerHTML='X';
            toggle=0;
            
        }
        else if (box[x].innerHTML=='' && toggle == 0 && result.innerHTML===''){
            box[x].innerHTML='O';
            toggle=1;
            
        }
        winner(2);
    })

    button.addEventListener('click', function(e){
        e.preventDefault();
        box[x].innerHTML='';
        result.innerHTML='';
        toggle=1;
    })
    
}

function winner(z){
    for (let x=0 ; x<=z ;x++){
        if((col1[x].innerHTML=='X') && (col2[x].innerHTML=='X') && (col3[x].innerHTML=='X')){
            result.innerHTML='Player X won , Tap RESET button to restart';
        }
        else if ((col1[x].innerHTML=='O') && (col2[x].innerHTML=='O') && (col3[x].innerHTML=='O')){
            result.innerHTML='Player O won , Tap RESET button to restart';
        }
        else if((row1[x].innerHTML=='X')  && (row2[x].innerHTML=='X') && (row3[x].innerHTML=='X')){
            result.innerHTML='Player X won , Tap RESET button to restart';
        }
        else if((row1[x].innerHTML=='O') && (row2[x].innerHTML=='O') && (row3[x].innerHTML=='O')){
            result.innerHTML='Player O won , Tap RESET button to restart';
        }
        else {
            if (alt[0].innerHTML=='X'&&alt[1].innerHTML=='X'&&alt[2].innerHTML=='X'){
                result.innerHTML='Player X won , Tap RESET button to restart';
            }
            else if (ctrl[0].innerHTML=='X'&&ctrl[1].innerHTML=='X'&&ctrl[2].innerHTML=='X'){
                result.innerHTML='Player X won , Tap RESET button to restart';
            }
            else if (alt[0].innerHTML=='O'&&alt[1].innerHTML=='O'&&alt[2].innerHTML=='O'){
                result.innerHTML='Player O won , Tap RESET button to restart';
            }
            else if(ctrl[0].innerHTML=='O'&&ctrl[1].innerHTML=='O'&&ctrl[2].innerHTML=='O') {
                result.innerHTML='Player O won , Tap RESET button to restart';
            }
        }
        
    }
}


//sheme
/**
 * player X won tap RESET to restart
 .red{
    background-color: #d156fe;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 90px sans-serif    ;
    
}
.black{
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 90px sans-serif   ;
}

 */