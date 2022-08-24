


// Players expense claculation
document.getElementById('calc-1').addEventListener('click', function(){
    const perPlayerExp = document.getElementById('per-player-exp');
    const playerExp = perPlayerExp.value;
    let playerList = document.getElementById('list').childNodes;
    const playerListNum = playerList.length;
    const totalPlayerExp = playerExp * playerListNum;
    document.getElementById('total-player-exp').innerText = totalPlayerExp;
});

// Manager & coach expense calculation
// function managerCoachExp() 
    
    document.getElementById('calc-2').addEventListener('click', function(){
        const managerExp = parseInt(document.getElementById('manager-exp').value);
        const coachExp = parseInt(document.getElementById('coach-exp').value);
        const perPlayerExp = document.getElementById('per-player-exp');
        const playerExp = perPlayerExp.value;
        let playerList = document.getElementById('list').childNodes;
        const playerListNum = playerList.length;
        const totalPlayerExp = playerExp * playerListNum;
        const managerCoachTotalExp = managerExp + coachExp;
        const totalExps = totalPlayerExp + managerCoachTotalExp;
        document.getElementById('total-exp').innerText = totalExps;
    })
