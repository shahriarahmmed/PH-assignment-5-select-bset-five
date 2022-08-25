// On click button disbale function
function disable(btn) {
        btn.disabled = true;
}

// player selection function
function playerSelectList(playerName) {
        const playerNameSelect = document.getElementById(playerName).innerText;
        const nameList = document.getElementById('list');
        let newListItem = document.createElement('li');
        newListItem.textContent = playerNameSelect;
        nameList.appendChild(newListItem);
        return newListItem;
}

// button on click select player name
document.getElementById('player-1').addEventListener('click', function(){
        const playerSelection = playerSelectList('player-1-name');
})
document.getElementById('player-2').addEventListener('click', function(){
        const playerSelection = playerSelectList('player-2-name');
})
document.getElementById('player-3').addEventListener('click', function(){
        const playerSelection = playerSelectList('player-3-name');
})
document.getElementById('player-4').addEventListener('click', function(){
        const playerSelection = playerSelectList('player-4-name');
})
document.getElementById('player-5').addEventListener('click', function(){
        const playerSelection = playerSelectList('player-5-name');
})
document.getElementById('player-6').addEventListener('click', function(){
        const playerSelection = playerSelectList('player-6-name');
})
document.getElementById('player-7').addEventListener('click', function(){
        const playerSelection = playerSelectList('player-7-name');
})
document.getElementById('player-8').addEventListener('click', function(){
        const playerSelection = playerSelectList('player-8-name');
})
document.getElementById('player-9').addEventListener('click', function(){
        const playerSelection = playerSelectList('player-9-name');
})

