import { useState } from "react";

export default function SearchBar({ onSearch }) {
   let [id, setId] = useState("");

   const handleChange = (event) => {
      setId(id = event.target.value)
   }

   return (
      <div>
         <input type="search" onChange={handleChange} value={id}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
