import React from "react";
import { Content } from "./style";
import { AiFillCheckCircle, AiFillExclamationCircle, AiFillCloseCircle } from "react-icons/ai";
import { CgSearchLoading } from "react-icons/cg";

const InformationsApFuncionario: React.FC = () => {
    return (
        <>
        <Content>
            <div className="columns">
                <div className="column">
                    <p className="helvetica light fonte_15 cor_0">dd/mm/yyyy</p>
                </div>

                <div className="column">
                  <p className="helvetica light fonte_15 cor_0">hh : mm</p>
                </div>

                <div className="column">
                    <p className="helvetica light fonte_15 cor_0"> hh : mm</p>
                </div>

                <div className="column">
                    <p className="helvetica light fonte_15 cor_0"> hh : mm</p>
                </div>

                <div className="column">
                    <p className="helvetica light fonte_15 cor_0">Inceptos vehicula primis gravida, cubilia...</p>
                </div>

            </div>
        </Content>
        </>
    )
};

export default InformationsApFuncionario;