document.getElementById('calc-1').addEventListener('click', function(){
    const perPlayerExp = document.getElementById('per-player-exp');
    const playerExp = perPlayerExp.value;
    const totalPlayerExp = playerExp * 5;
    document.getElementById('total-player-exp').innerText = totalPlayerExp;
});
