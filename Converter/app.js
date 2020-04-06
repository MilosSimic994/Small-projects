
document.getElementById('output').style.visibility = 'hidden'

document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible'
    let punds = e.target.value;
    console.log(punds);
    document.getElementById('gramsOutput').innerHTML = punds/0.0022046;
    document.getElementById('kgOutput').innerHTML = punds/2.2046
    document.getElementById('ozOutput').innerHTML = punds*16
    
})