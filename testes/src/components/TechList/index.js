import React, {useState} from 'react';

// import { Container } from './styles';

export default function TechList() {
    const [techs, setTechs] = useState([]);
    const [newTech, setnewTech] = useState('');

    function handleAddTech() {
        setTechs([...techs, newTech]);
        setnewTech('');
    }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
        <ul data-testid="tech-list">{techs.map(tech => <li key={tech}>{tech}</li>)}</ul>

        <label htmlFor="tech">Tech</label>
        <input id="tech" type="text" value={newTech} onChange={e => setnewTech(e.target.value)}/>
        <button onClick={handleAddTech}>Adicionar</button>
    </form>
  );
}
