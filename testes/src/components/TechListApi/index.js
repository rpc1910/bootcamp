import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { Container } from './styles';
import { addTech } from "../../store/modules/techs/actions";

export default function TechListApi() {
  const dispatch = useDispatch();

  const [newTech, setnewTech] = useState("");

  const techs = useSelector(state => state.techs);

  function handleAddTech() {
    dispatch(addTech(newTech));
    setnewTech("");
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input
        id="tech"
        type="text"
        value={newTech}
        onChange={e => setnewTech(e.target.value)}
      />
      <button onClick={handleAddTech}>Adicionar</button>
    </form>
  );
}
