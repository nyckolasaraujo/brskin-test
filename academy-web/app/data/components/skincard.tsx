import { Skin } from "@/app/data/skins";

type Props = {
  skin: Skin;
  favorito: boolean;
  onFavoritar: (id: number) => void;
};

export function SkinCard({ skin, favorito, onFavoritar }: Props) {
  return (
    <li style={{ border: "1px solid #ccc", padding: 12, marginBottom: 8 }}>
      <strong>{skin.name}</strong> - R$ {skin.price.toFixed(2)} - {skin.wear}
      {!skin.available && (
        <span style={{ color: "gray" }}> (indisponível)</span>
      )}
      <button onClick={() => onFavoritar(skin.id)} style={{ marginLeft: 12 }}>
        {favorito ? "★ Favorito" : "☆ Favorito"}
      </button>
    </li>
  );
}