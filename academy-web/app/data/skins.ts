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
