document.getElementById("infDados").addEventListener("click", function () {
    let P = parseFloat(document.getElementById("price").value); // Preço fornecido pelo boleto
    let dV = parseInt(document.getElementById("dataVenc").value); // Dia do Vencimento
    let dH = parseInt(document.getElementById("diaHoje").value); // Dia de Hoje
    let dA = dH - dV; // Dias em atraso
    let J = 0.0003; // Juros (0.03%)
    let M = 0.02; // Multa (2%)
    let vJ = 0;
    let vM = 0;
    let tM = (M + P) / 100; // Juros e Multa em decimal
    let tAP = 0; // Total a pagar

    if (isNaN(P) || isNaN(dV) || isNaN(dH)) {
        alert("Todos os campos devem ser preenchidos com valores válidos!");
    } else if (dA < 1) {
        tAP = P; // Sem juros ou multa
        document.getElementById("price-total").textContent = `R$${tAP.toFixed(2)}`;
    } else {
        vM = P * M; // Calcula multa fixa de 2% sobre o preço
        vJ = P * (J * dA); // Calcula juros diário acumulado

        tAP = P + vM + vJ; // Multiplicação resolve o cálculo sem usar "+"
        
        console.log(`Multa: R$${vM.toFixed(2)}`);
        console.log(`Juros: R$${vJ.toFixed(2)}`);
        console.log(`Total a pagar: R$${tAP.toFixed(2)}`);
        
        document.getElementById("price-total").textContent = `R$${tAP.toFixed(2)}`;
    }
});
   
    
      
   // let hora = 0; // Início no horário 0    
    // while (10 < 20) {
    //     hora++;
    //     if (hora === 24) {
    //         hora = 0; // Reseta as horas
    //         diaHoje++; // Incrementa o dia
    //     } // Exibe o horário atual

    //     sleep(1); // Espera 1 segundo antes de atualizar
    // }

