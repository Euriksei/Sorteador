function sortear(){
    let intervalo = document.getElementById('seletor').value;
    intervalo = Number(intervalo);
    let numeroSorteado = Math.floor(Math.random() * intervalo) + 1;
    document.getElementById('sorteado').querySelector('p').textContent = numeroSorteado;
}