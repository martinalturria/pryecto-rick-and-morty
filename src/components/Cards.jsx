import Card from "./Card";

export default function Cards(props) {
   return (
      <div>
         {props.characters.map((element) => {
            return (
               <Card
                  key={element.id}
                  name={element.name}
                  status={element.status}
                  species={element.species}
                  gender={element.gender}
                  origin={element.origin.name}
                  image={element.image}
                  onClose={() =>
                        window.alert("Emulamos que se cierra la card")
                  }
               />
            );
         })}
      </div>
   );
}
