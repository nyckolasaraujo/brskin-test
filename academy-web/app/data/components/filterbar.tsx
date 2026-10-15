type FilterBarProps = {
  busca: string;
  setBusca: (valor: string) => void;
  apenasDisponiveis: boolean;
  setApenasDisponiveis: (valor: boolean) => void;
  ordem: "asc" | "desc";
  setOrdem: (valor: "asc" | "desc") => void;
};

export function FilterBar({
  busca,
  setBusca,
  apenasDisponiveis,
  setApenasDisponiveis,
  ordem,
  setOrdem,
}: FilterBarProps) {
  return (
    <div style={{ marginBottom: 16, display: "flex", gap: 12, alignItems: "center" }}>
      <input
        type="text"
        placeholder="Pesquisar skin..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={apenasDisponiveis}
          onChange={(e) => setApenasDisponiveis(e.target.checked)}
        />
        Apenas disponíveis
      </label>

      <button
        onClick={() => setOrdem(ordem === "asc" ? "desc" : "asc")}
      >
        Preço: {ordem === "asc" ? "Crescente ▲" : "Decrescente ▼"}
      </button>
    </div>
  );
}

//