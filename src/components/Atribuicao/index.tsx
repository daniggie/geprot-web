import React, { useState } from "react";
import { useHistory } from "react-router";
import {api} from "../../services/api";


import { Container } from "./style";
import arrowleft from "../../icons/arrowleft.svg";
import { RiCheckLine } from "react-icons/ri";
import { FiX, FiCheck } from "react-icons/fi";

import Skills from "./Skills"

interface AtribuicaoProps {
  projetoId: number,
  consultorId: string,
  isAllocated: boolean
}

interface AlocarProps {
  projetoId: number,
  consultorId: number,
  quantidadeHoras: number
}

// valores chegando pelo botao, falta fazer a funcao para alocar
const Atribuicao: React.FC<AtribuicaoProps> = ({projetoId, consultorId, isAllocated}) => {
  const history = useHistory();
  function Alocar(consultorId: number, projetoId: number) {
    console.log("bomdia")
    const alocarHoras = {
      consultorId: 0,
      projetoId: 0,
      quantidadeHoras: 0,
    }

    alocarHoras.projetoId = projetoId;
    alocarHoras.consultorId = consultorId;
    alocarHoras.quantidadeHoras = parseInt((document.getElementById('inputDTO') as HTMLInputElement).value);

    const token = localStorage.getItem("@Geprot:token");
    let config = {headers: {
      "Content-Type": "application/json", Authorization: `Bearer ${token}`}};

    api.post(`consultor/alocar`, JSON.stringify(alocarHoras), config)

    history.push(`/alocarescolherfuncionario`)
  };

  const [ abrirSkills, setAbrirSkills ] = useState(true);
  const abreSkills = () => {
    if(!abrirSkills){
     setAbrirSkills(true);
    }else{
      setAbrirSkills(false);
    }

    return abrirSkills;
  };

  const [ overlay, setOverlay ] = useState(true);
  const addOverlay = () => {
    if(!overlay){
     setOverlay(true);
    }else{
      setOverlay(false);
    }
    return overlay;
  };

  const gambiarra = () => {
    alert('Já esta atribuido')
  }

  return (
    <>
      <Container overlay={overlay} isAllocated={isAllocated} popup={abrirSkills}>
        <div className="atribuir">
          <button className="cor_000" onClick={isAllocated==false ? abreSkills : gambiarra}> {isAllocated == false ? "Atribuir" : "Atribuído" }</button>
        </div>

        <div id="popup" className="popup">
          
          <div className="popSkill">
            <div id="barra" >
              <FiX size={25} onClick={abreSkills} cursor="pointer"/>
              <p className="helvetica fonte_14">Skills do consultor</p>
              <FiCheck size={25} onClick={addOverlay} cursor="pointer"/>
            </div>
            
            <div className="lines helvetica cor_0 lighter" >
              <Skills/>
              <Skills/>
              <Skills/>
              <Skills/>
              <Skills/>
              <Skills/>
              <Skills/>
              <Skills/>
              <Skills/>
              <Skills/>
              <Skills/>
              <Skills/>
            </div>
            
          </div>
          
		    </div>

        <div id="atribuir">
          <div className="overlay">
            <img src={arrowleft} alt="" onClick={addOverlay}/>
            <p className="helvetica cor_5 fonte_20">Horas:</p>
            <input id="inputDTO" placeholder="0H" type="number"/>
            <button onClick={() => Alocar(parseInt(consultorId), projetoId)}><RiCheckLine size={ 20 } color="#fff"/></button>
          </div>
        </div>
      </Container>
    </>
  )
};

export default Atribuicao;
