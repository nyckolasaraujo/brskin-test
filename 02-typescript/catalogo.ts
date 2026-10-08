export { }; // Garante que o arquivo é um módulo

export type Skin = {
    id: number;
    name: string;
    price: number; // em reais
    available: boolean;
    wear: string; // "FN", "MW", "FT", "WM" ou "BS" Glock-18, Desert Eagle
};

export const skins: Skin[] = [
    { id: 1, name: "AK-47 | Redline", price: 120, available: true, wear: "FT" },
    { id: 2, name: "AWP | Asiimov", price: 430, available: true, wear: "MW" },
    { id: 3, name: "M4A4 | Howl", price: 5200, available: false, wear: "FN" },
    { id: 4, name: "Glock-18 | Fade", price: 900, available: true, wear: "BS" },
    { id: 5, name: "USP-S | Kill Confirmed", price: 350, available: true, wear: "WM" },
    { id: 6, name: "Desert Eagle | Blaze", price: 1800, available: true, wear: "FT" },
    { id: 7, name: "AK-47 | Vulcan", price: 750, available: true, wear: "MW" },
    { id: 8, name: "M4A1-S | Printstream", price: 640, available: false, wear: "WM" },
    { id: 9, name: "Karambit | Doppler", price: 9500, available: true, wear: "BS" },
    { id: 10, name: "P250 | Sand Dune", price: 3, available: true, wear: "WM" }
];

//1. apenas itens disponiveis (pronta)
export function availableItems(lista: Skin[]): Skin[] {
    return lista.filter((item) => item.available);
}
//2.busca por nome, ignorando maiscula/minuscula.
// retorna underfild senão achar.
export function findByName(lista: Skin[], name: string): Skin | undefined {
    const busca = name.toLowerCase().trim();
    return lista.find((s) => s.name.toLowerCase().includes(busca));
}
//3. intens com preço entre min e max (inclusive)
export function priceRange(lista: Skin[], min: number, max: number): Skin[] {
    return lista.filter((s) => s.price >= min && s.price <= max);
}
//4. retorna uma NOVA lista com os preços com desconto ( não altera a lista original)
export function applyDiscount(lista: Skin[], percentual: number): Skin[] {
    return lista.map((s) => ({
        ...s,
        price: s.price * (1 - percentual / 100),
    }));
}
//5. preço médio (0 se a lista estiver vazia)
export function averagePrice(lista: Skin[]): number {
    if (lista.length === 0) return 0;
    const soma = lista.reduce((acumulador, s) => acumulador + s.price, 0);
    return soma / lista.length;
}
//6. ordenar do mais barato para o mais caro, sem alterar a original
export function sortByPrice(lista: Skin[]): Skin[] {
    return [...lista].sort((a, b) => a.price - b.price);
}
//---testes---
console.log("Disponíveis:", availableItems(skins).length);
console.log("Busca:", findByName(skins, "awp | asiimov")?.price);
console.log("Faixa 100-1000:", priceRange(skins, 100, 1000).map((s) => s.name));
console.log("Desconto 10%:", applyDiscount(skins, 10)[0].price);
console.log("Média:", averagePrice(skins));
console.log("Mais barato:", sortByPrice(skins)[0].name);
console.log("Original intacta:", skins[0].price); 