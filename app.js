
  init_state = [
    2, 3, 5,
    1, 4, '',
    7, 8, 6
]

var empty = 0;
var moves = 0;
var btns =  document.getElementsByClassName('cell');
document.getElementsByClassName('btn')[0].addEventListener('click',reset);
reset();


for (let i = 0 ; i <= 8 ; i++ )
    btns[i].addEventListener('click',function(){
    if(i === empty)
        return;
    

    btns[empty].textContent = btns[i].textContent ;
    btns[i].textContent = '';
    empty = i;
    moves++;
    document.getElementById('moves').textContent = moves;

    if(check()){
        document.getElementById('game_status').textContent = 'You won !';
        return;
    }else{
        document.getElementById('game_status').textContent = 'Start moving Tile !';
    }


    });


function reset(){
    empty = 5;
    moves = 0;
    document.getElementById('game_status').textContent = 'Start moving Tile !';
for (let i = 0 ; i <= 8 ; i++)
    btns[i].textContent = init_state[i];
    document.getElementById('moves').textContent = moves;
}


function check(){
    for (let i = 0 ; i <= 7 ; i++ ){
           if(btns[i].textContent != i+1)
                return false;

    }
    return true;
}