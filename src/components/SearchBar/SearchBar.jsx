import { useState } from "react";
import styles from "./searchbar.module.css"

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
      <div className={styles.container}>
         <input type="search" onChange={handleChange} onKeyDown={handleKey} value={id}/>
         <button onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
