import React from "react";
import { Container } from "./style";
//Revisado 03/12/2020
interface SkillProps {
  nome: string
  id: number
}

const Skills: React.FC<SkillProps> = ({id, nome}) => {
    return(
      <Container>
            <input type="radio" id="vehicle1" name="vehicle1" value={id}/>           
            <label>{nome}</label>
      </Container>
    );
  };
  
export default Skills;