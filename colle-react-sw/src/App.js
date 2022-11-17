import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [people, setPeople] = useState(null);
  const [page, setPage] = useState(1);

  const pageChange = (event, value) => {
    setPage(value);
  }

  useEffect(() => {
    async function getPeople(){
      const response = await axios.get(`https://swapi.dev/api/people/${page}`);
      setPeople(response.data.results);
      console.log(response.data.results);
    };
    getPeople();
  }, [])

  return (
    <div>
      <h1>Personnage de Star Wars</h1>

      <ul>

      </ul>
    </div>
  );
}

export default App;
