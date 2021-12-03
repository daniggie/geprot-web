import React from 'react';
import { AiFillCheckCircle, AiFillExclamationCircle, AiFillCloseCircle } from "react-icons/ai";

interface Status {
  status : string;
}
//Revisado 03/12/2021
const IconeAprovamento: React.FC<Status> = ({status}) => {

  if(status == "APROVADO"){
    return(

      <AiFillCheckCircle size={25} color="#00579E"/>
    );
  }else if(status == "PENDENTE"){

    return(
      <div >
      <AiFillExclamationCircle size={25} color="#00579E"/>
      </div>
    );
  }else{
    return(

      <AiFillCloseCircle size={25} color="#00579E"/>
    );
  }
};

export default IconeAprovamento;
