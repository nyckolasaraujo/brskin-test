// Regras:
// - subtotal = soma dos preços
// - taxa da plataforma = 5% do subtotal[cite: 2]
// - cupom "BRS10" dá 10% de desconto sobre (subtotal + taxa);[cite: 2]
// - outros cupons são ignorados[cite: 2]
// - qualquer preço <= 0 é inválido e deve lançar um erro[cite: 2]

function calcularSubtotal(precos: number[]): number {
    let soma = 0;
    for (const preco of precos) {
        soma = soma + preco;
    }
    return soma;
}

function calcularTaxa(subtotal: number): number {
    // 5% do subtotal
    return subtotal * 0.05;
}

function aplicarCupom(valor: number, cupom?: string): number {
    // Se o cupom for "BRS10", aplica 10% de desconto (multiplica por 0.9)
    if (cupom === "BRS10") {
        return valor * 0.9;
    }
    // Senão, retorna o valor sem alteração
    return valor;
}

function validarPrecos(precos: number[]): void {
    // Para cada preço, se for <= 0, lança um erro
    for (const preco of precos) {
        if (preco <= 0) {
            throw new Error("Preço inválido: " + preco);
        }
    }
}

function calcularTotal(precos: number[], cupom?: string): number {
    validarPrecos(precos);
    const subtotal = calcularSubtotal(precos);
    const taxa = calcularTaxa(subtotal);
    return aplicarCupom(subtotal + taxa, cupom);
}

// ----- Casos de teste manuais -----
console.log("Caso 1:", calcularTotal([100, 50]));       // esperado 157.5[cite: 3]
console.log("Caso 2:", calcularTotal([100, 50], "BRS10")); // esperado 141.75[cite: 3]
console.log("Caso 3:", calcularTotal([]));               // esperado 0[cite: 3]
console.log("Caso 4:", calcularTotal([200], "XYZ"));       // esperado 210[cite: 3]

try {
    calcularTotal([-5]);
} catch (erro) {
    console.log("Caso 5:", (erro as Error).message); // Preço inválido: -5[cite: 3]
}

// Caso 6: Três itens (50, 50, 100) com o cupom "BRS10"
// Subtotal = 200 | Taxa (5%) = 10 | Total antes do cupom = 210 | Com 10% de desconto = 189
console.log("Caso 6:", calcularTotal([50, 50, 100], "BRS10")); // esperado 189