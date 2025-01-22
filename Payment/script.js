document.getElementById("infDados").addEventListener("click", function () {
    let P = parseFloat(document.getElementById("price").value); // Valor do boleto
    let dataVenc = new Date(document.getElementById("dataVenc").value); // Data de vencimento
    let diaHoje = new Date(document.getElementById("diaHoje").value); // Data atual

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpa resultados anteriores

    // Verifica se todos os campos foram preenchidos
    if (isNaN(P) || isNaN(dataVenc) || isNaN(diaHoje)) {
        alert("Todos os campos devem ser preenchidos com valores válidos!");
        return;
    }

    // Calcula os dias de atraso
    const tempDif = diaHoje - dataVenc; // Diferença de tempo entre as datas
    const dA = Math.ceil(tempDif / (1000 * 60 * 60 * 24)); // Dias em atraso

    let tAP = 0; // Total a pagar
    if (dA < 1) {
        tAP = P; // Sem juros ou multa
        resultadoDiv.innerHTML = `<p>O boleto ainda está no prazo. Valor a pagar: R$${tAP.toFixed(2).replace('.', ',')}</p>`;
    } else {
        let J = 0.0003; // Juros (0.03% por dia)
        let M = 0.02; // Multa fixa (2%)
        let vM = P * M; // Calcula multa fixa
        let vJ = P * (J * dA); // Calcula juros diário acumulado
        tAP = P + vM + vJ; // Calcula o total a pagar

        resultadoDiv.innerHTML = `
            <form id="payment-form">
                <div class="text_Pay p-3">
                    <label class="form-label" for="floatingInputDisabled">
                        <strong>TOTAL:</strong><div id="price-total">R$${tAP.toFixed(2).replace('.', ',')}</div>
                    </label>
                </div>
            </form>
        `;
        /* <h2>Resultados:</h2>
            <p>Valor original: R$${P.toFixed(2).replace('.', ',')}</p>
            <p>Dias de atraso: ${dA} dia(s)</p>
            <p>Multa (2%): R$${vM.toFixed(2).replace('.', ',')}</p>
            <p>Juros (0,03% por dia): R$${vJ.toFixed(2).replace('.', ',')}</p>
           <p><strong>Total a pagar: R$${tAP.toFixed(2).replace('.', ',')}</strong></p>*/ 
    }
});

