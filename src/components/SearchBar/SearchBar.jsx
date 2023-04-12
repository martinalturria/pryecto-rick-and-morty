import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleKey = (event) => {
      if(event.key === "Enter"){
         onSearch(id);
         setId('');
      }
   }

   return (
      <div>
         <input type="search" onChange={handleChange} onKeyDown={handleKey} value={id}/>
         <button onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
