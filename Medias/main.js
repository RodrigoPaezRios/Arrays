const notaInputs = [
    document.getElementById('Nota1'),
    document.getElementById('Nota2'),
    document.getElementById('Nota3')
];

const resultado = document.getElementById("resultado")

const media = document.getElementById("media");

media.addEventListener("click", function() {
    let notas = [];

    notaInputs.forEach(input => {
        notas.push(parseFloat(input.value));
    });

    let sum = 0;
    for (let i = 0; i < notas.length; i++) {
        sum += notas[i];
    }

    let promedio = sum / notas.length; 

    resultado.textContent="Resultado: "+promedio;
});