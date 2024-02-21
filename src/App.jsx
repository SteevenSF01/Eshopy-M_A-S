import { useState } from "react";
import "./App.css";
import Discriptif from "./assets/components/Discriptif/Discriptif";
import Navbar from "./assets/components/navbar/Navbar";
import Card from "./assets/components/Card/Card";
import Sidebar from "./assets/components/Sidebar/Sidebar";

import Brain from "./assets/images/brain.jpg";
import Chaise from "./assets/images/chaise.jpg";
import Chaton from "./assets/images/chatton.jpg";
import Cuillere from "./assets/images/cuillere.jpg";
import Dragon from "./assets/images/dragon.jpg";
import Gateau from "./assets/images/gateau.jpg";
import Lion from "./assets/images/LionTab.jpg";
import Partiture from "./assets/images/partiture.jpg";
import Pont from "./assets/images/pont.jpg";
import Tele from "./assets/images/tele.jpg";

let images = [
  {
    id: 1,
    titre: "Brain",
    image: Brain,
    description:
      "Une représentation artistique d'un cerveau humain émergeant dans un kaléidoscope de teintes douces de rose et de turquoise. Les courbes délicates et les nuances vibrantes captent l'essence de la pensée créative et de l'exploration mentale, invitant à la contemplation et à l'inspiration infinie.",
    prix: 0.29,
    auteur: "Aurora Montclair",
    quantite : 4,
  },
  {
    id: 2,
    titre: "Chair",
    image: Chaise,
    description:
      "Une chaise turquoise est habillée de coulures de peinture mauve et orange, agrémentée de nuances subtiles de jaune et de vert. Cette fusion de couleurs évoque une énergie créative dynamique et spontanée, faisant de cette chaise un symbole d'expression artistique et d'imagination débordante.",
    prix: 0.59,
    auteur : "Remy Stellanova",
    quantite : 10,
  },
  {
    id: 3,
    titre: "Kitty",
    image: Chaton,
    description:
      "Découvrez un adorable chaton aux tons vifs et expressifs. Mêlant des nuances de mauve et d'orange, s'illumine subtilement de touches de jaune et de vert. Les teintes vibrantes reflètent la vitalité et la curiosité de ce jeune félin, captivant le cœur avec sa douceur et son charme irrésistibles.",
    prix: 0.42,
    auteur : "Isabella Quixotica",
    quantite : 5,
  },
  {
    id: 4,
    titre: "Spoon",
    image: Cuillere,
    description:
      "Dans une composition saisissante, une cuillère en bois repose délicatement sur une assiette remplit de couleurs, où se mêlent des éclats de mauve et d'orange, relevés par des touches subtiles de jaune et de vert. Les couleurs évoquent une harmonie organique, offrant une scène visuellement captivante et chaleureuse, tout en invitant à la contemplation et à la convivialité. ",
    prix: 0.58,
    auteur : "Jaxon Emberglow",
    quantite : 9,
  },
  {
    id: 5,
    titre: "Dragon",
    image: Dragon,
    description:
      "Un dragon imposant se tient sur ses quatre pattes, sa silhouette se détachant contre le ciel étoilé. Ses écailles d'un bleu-gris profond captent la lumière de la lune, tandis que des touches délicates de rose révèlent sa présence mystique. Avec sa stature impressionnante et ses nuances élégantes, il incarne à la fois la puissance brute et la beauté envoûtante des créatures légendaires.",
    prix: 0.67,
    auteur: "Marigold Celestia",
    quantite: 7,
  },
  {
    id: 6,
    titre: "Cake",
    image: Gateau,
    description:
      "Imaginez un gâteau d'une élégance extraordinaire : ses couches délicates arborent des teintes de mauve et de pêche, tandis que des accents turquoise ajoutent une touche de vivacité. Une cascade de couleur mauve dégouline gracieusement sur les côtés du gâteau, créant un contraste saisissant. Chaque bouchée évoque une expérience gustative et visuelle inoubliable.",
    prix: 0.15,
    auteur : "El Japones",
    quantite: 11,
  },
  {
    id: 7,
    titre: "Lion",
    image: Lion,
    description:
      "Le Lion, dans une profusion de couleurs, un lion adulte se tient majestueusement, sa crinière flamboyante captant la lumière. Entouré de teintes chatoyantes de bleu, de vert, de jaune, de nuances subtiles de mauve et de rose, il incarne la puissance et l'élégance au cœur de cette symphonie chromatique, révélant la magnificence de la nature dans toute sa splendeur.",
    prix: 1,
    auteur : "El Julio!",
    quantite: 3,
  },
  {
    id: 8,
    titre: "Partiture",
    image: Partiture,
    description:
      "Dans un tableau musical enchanté, un livre de partitions s'anime sous nos yeux, ses pages chatoyantes ornées de nuances de mauve, de turquoise et de pêche. Les notes prennent vie, s'élevant de manière magique du papier, vibrant de couleurs vives et éclatantes. Captivant les sens et éveillant l'âme à la beauté de l'art musical dans toute sa splendeur chromatique.",
    prix: 0.9,
    auteur : "Romanof",
    quantite : 8
  },
  {
    id: 9,
    titre: "Pont",
    image: Pont,
    description:
      "Surplombant les eaux paisibles de la mer, un pont en bois s'étend majestueusement, chaque planche révélant les marques du temps et de l'aventure. Des crayons de pastel bordent le chemin, leurs couleurs chaudes illuminant l'horizon avec une énergie vive et éclatante. Invitant les voyageurs à embarquer pour un voyage de découverte et d'inspiration le long de cette voie enchantée.",
    prix: 0.62,
    auteur : "Felix Nebuloso",
    quantite: 5,
  },
  {
    id: 10,
    titre: "Television",
    image: Tele,
    description:
      "Dans un hommage rétro, une télévision ancienne en blanc pur trône majestueusement, son écran noir prêt à capturer les histoires du passé. Des coulures de couleurs vives - rouge, jaune, vert, et orange - dégoulinent du sommet de l'appareil, ajoutant une touche d'éclat et de fantaisie à sa silhouette classique. Cette image évoque un mélange de nostalgie et de créativité, fusionnant le passé avec une énergie dynamique et colorée, prête à illuminer les moments présents.",
    prix: 0.74,
    auteur: "Orion Fableweaver",
    quantite : 3,
  },
];

function App() {
  const [ouvert, setOuvert] = useState(false);
  const [cible, setCible] = useState(null)

  const achetez = () =>{
    if (condition) {
      
    }
  }

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const handleLogoClick = () => {
    setSidebarVisible(!sidebarVisible);
  };
 

  return (
    <>
      <div>
      <Navbar onLogoClick={handleLogoClick} />
      {sidebarVisible && <Sidebar />}
      
    </div>
      <Card ouvert={ouvert} setOuvert={setOuvert} lesImages={images} setCible = {setCible} cible = {cible} />
      {ouvert ? <Discriptif ouvert={ouvert} setOuvert={setOuvert} lesImages={images} cible = {cible} />  : ""}
    </>

  );
}

export default App;
