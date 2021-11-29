import React, {useState} from "react";
import { ContainerAlert } from "./style";
import { BiTrash } from "react-icons/bi";

interface Notificacao {
  id: number;
  descricao: string;
  idUsuario: number;
  nome: string;
  email: string;
  dataCadastro: string;
  status: boolean;
  data: string;
  statusLeitura: boolean;
}

const NofiticacaoAlert: React.FC<Notificacao> = ({id,descricao,idUsuario,nome,email,dataCadastro,status,data,statusLeitura}) => {

  const [perfil] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:gestor');

    if(usuario) {
      let languageObject = JSON.parse(usuario);
        return languageObject;
      }
  });

  const [ overlay, setOverlay ] = useState(true);
  const addOverlay = () => {
    if(!overlay){
     setOverlay(true);
    }else{
      setOverlay(false);
    }
    return overlay;
  };

  return (
    <>
    <ContainerAlert overlay={overlay}>
      <div className="line cor_0f" >
        <div className="title fonte_13 bold" > {descricao} </div>
        <div className="text" onClick={addOverlay}>{descricao}</div>
        <div className="icon">
          <BiTrash color="#0075B1"/>
        </div>
      </div>

      <div className="details">
        <div className="overlay">
              <b className="fonte_14">{descricao}</b>
              <p className="fonte_12">{descricao}</p>
              <button onClick={addOverlay}>Ver</button>
        </div>
      </div>

    </ContainerAlert>
    </>
  )
};

export default NofiticacaoAlert;



