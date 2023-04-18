import Card from "../Card/Card";
import style from "./cards.module.css"

function Cards({ characters, onClose }) {
    return (
        <div className={style.container}>
            {characters.map((character) => {
                return (
                    <Card
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin.name}
                        image={character.image}
                        onClose={onClose}
                    />
                );
            })}
        </div>
    );
}
export default Cards;
