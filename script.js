document.addEventListener('DOMContentLoaded', function () {
    const btnCalcular = document.getElementById('btn_calcular');
    const inputs = document.querySelectorAll('input[type="number"]');

    // Adicionando evento de clique ao botão "Calcular"
    btnCalcular.addEventListener('click', calcular);

    // Adicionando eventos de input aos campos de entrada
    inputs.forEach(input => {
        input.addEventListener('input', calcular);
    });

    // Função para calcular os valores
    function calcular() {
        const valorBase = parseFloat(document.getElementById('valor_base').value);
        const valorTransp = parseFloat(document.getElementById('valor_transporte').value);
        const valorAlim = parseFloat(document.getElementById('valor_alimentacao').value);
        const valorAuto = parseFloat(document.getElementById('valor_automovel').value);
        const faltas = parseFloat(document.getElementById('faltas').value);

        // Calculando a receita total
        const receitaTotal = valorBase + valorTransp + valorAlim;
        document.getElementById('valor_receita').value = receitaTotal.toFixed(2);

        // Calculando o total dos descontos
        const descontosTotal = valorAuto + faltas;
        document.getElementById('valor_descontos').value = descontosTotal.toFixed(2);

        // Calculando o total
        const total = receitaTotal - descontosTotal;
        document.getElementById('valor_total').value = total.toFixed(2);
    }
});
