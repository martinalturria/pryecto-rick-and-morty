import Card from "../Card/Card";

function Cards({ characters, onClose }) {
    return (
        <div>
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
