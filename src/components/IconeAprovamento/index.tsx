import React from 'react';
import { AiFillCheckCircle, AiFillExclamationCircle, AiFillCloseCircle } from "react-icons/ai";

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

      <AiFillExclamationCircle size={25} color="#0091BD"/>
    );
  }else{
    return(
      
      <AiFillCloseCircle size={25} color="#0091BD"/>
    );
  }
};

export default IconeAprovamento;
