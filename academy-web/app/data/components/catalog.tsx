"use client";
import { useState } from "react";
import { skins } from "@/app/data/skins";
import { SkinCard } from "./skincard";
import { FilterBar } from "./filterbar";

export function Catalog() {
    const [busca, setBusca] = useState("");
    const [apenasDisponiveis, setApenasDisponiveis] = useState(false);
    const [ordem, setOrdem] = useState<"asc" | "desc">("asc");
    const [favoritos, setFavoritos] = useState<number[]>([]);

    const termo = busca.toLowerCase();
    let lista = skins.filter((s) => s.name.toLowerCase().includes(termo));

    if (apenasDisponiveis) {
        lista = lista.filter((s) => s.available);
    }

    lista = [...lista].sort((a, b) => {
        if (ordem === "asc") {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    function alternarFavorito(id: number) {
        if (favoritos.includes(id)) {
            setFavoritos(favoritos.filter((favId) => favId !== id));
        } else {
            setFavoritos([...favoritos, id]);
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Catálogo de Skins</h1>
            <FilterBar
                busca={busca}
                setBusca={setBusca}
                apenasDisponiveis={apenasDisponiveis}
                setApenasDisponiveis={setApenasDisponiveis}
                ordem={ordem}
                setOrdem={setOrdem}
            />
            <ul>
                {lista.map((skin) => (
                    <SkinCard
                        key={skin.id}
                        skin={skin}
                        favorito={favoritos.includes(skin.id)}
                        onFavoritar={alternarFavorito}
                    />
                ))}
            </ul>
        </div>
    );
}