import React from "react";
import { Content } from "./style";
import IconeAprovamento from "../../IconeAprovamento";

const InformationsApFuncionario: React.FC = () => {
    return (
        <>
        <Content>
            <div className="columns">
                <div className="column">
                    <p className="helvetica light fonte_15 cor_0">dd/mm/yyyy</p>
                </div>

                <div className="column">
                    <p className="helvetica light fonte_15 cor_0"> hh : mm</p>
                </div>

                <div className="column2">
                    <p className="desc1 helvetica light fonte_15 cor_0">LERIGOU</p>
                    <p className="desc2 helvetica light fonte_13 cor_0">Inceptos vehicula primis gravida, cubilia,
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda veniam soluta.</p>
                </div>


                <div className="column">
                <p className="helvetica light fonte_15 cor_0"> <IconeAprovamento status="APROVADO"/></p>
                </div>

            </div>
        </Content>
        </>
    )
};

export default InformationsApFuncionario;
