import React from 'react';
import { AiFillCheckCircle, AiFillExclamationCircle, AiFillCloseCircle } from "react-icons/ai";
import api from '../../services/api';

interface Status {
  status : string;
}
const IconeAprovamento: React.FC<Status> = ({status}) => {
  
  if(status == "APROVADO"){
    return(

      <AiFillCheckCircle size={25} color="#0091BD"/>
    );
  }else if(status == "PENDENTE"){

    return(
      <div >
      <AiFillExclamationCircle size={25} color="#0091BD"/>
      </div>
    );
  }else{
    return(

      <AiFillCloseCircle size={25} color="#0091BD"/>
    );
  }
};

export default IconeAprovamento;
