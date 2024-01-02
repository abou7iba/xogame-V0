let title = document.querySelector('.title')
let player = 'X';
let squares = [];
function endGame(n1,n2,n3)
{   
    title.innerHTML = `مبروك يا لفته ... <br>${squares[n1]} WINNER`;
    document.getElementById('item'+n1).style.background ='#A1EEBD';
    document.getElementById('item'+n2).style.background ='#A1EEBD';
    document.getElementById('item'+n3).style.background ='#A1EEBD';

    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);
}
function winner()
{
    for(let i = 1; i < 10; i++ ){
        squares[i] = document.getElementById('item'+i).innerHTML;
    }
    // 
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        endGame(1,2,3);
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ''){
        endGame(4,5,6);
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != ''){
        endGame(7,8,9);
    }
    // 
    if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
        endGame(1,4,7);
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != ''){
        endGame(2,5,8);
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
        endGame(3,6,9);
    }   
    // 
    if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ''){
        endGame(1,5,9);
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != ''){
        endGame(3,5,7);
    }

}

function game(id){

    let element = document.getElementById(id);

    if(player === 'X' && element.innerHTML == ''){

        element.innerHTML = 'X';
        player = 'O';
        title.innerHTML = 'O';
    }
    else if(player === 'O' && element.innerHTML == ''){

        element.innerHTML = 'O';
        player = 'X';
        title.innerHTML = 'X';
    }

    winner();

}