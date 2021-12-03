import React from "react";
import { Container } from "./style";

interface SkillProps {
  nome: string
  id: number
}

const Skills: React.FC<SkillProps> = ({id, nome}) => {
    return(
      <Container>
        <input type="checkbox" id="vehicle1" name="vehicle1" value={id}/>
        {/*Chamar NAMETEST em API */}
        <label>{nome}</label>
      </Container>
    );
  };
  
export default Skills;