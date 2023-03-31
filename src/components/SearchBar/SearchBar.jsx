export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={() => props.onSearch("Estoy Recibiendo un ID")}>Agregar</button>
      </div>
   );
}
