import React from "react";
import { Content } from "./style";
import { AiFillCheckCircle, AiFillExclamationCircle, AiFillCloseCircle } from "react-icons/ai";
import { CgSearchLoading } from "react-icons/cg";

const InformationsAprovar: React.FC = () => {
    return (
        <>
        <Content>
            <div className="columns">
            <div className="column1">
                <p className="helvetica light fonte_15 cor_0">000000</p>
            </div>
            
            <div className="column2">
            <p className="helvetica light fonte_15 cor_0">Persons name</p>
            </div>

            <div className="column2">
            <p className="helvetica light fonte_15 cor_0">Providers name</p>
            </div>

            <div className="column1">
            <p className="helvetica light fonte_15 cor_0"> <AiFillCheckCircle size={25} color="#0091BD"/></p>
            </div>

            <div className="column1">
            <p className="helvetica light fonte_15 cor_0">00</p>
            </div>

            <div className="column1">
            <p className="helvetica light fonte_15 cor_0">
                <a href="/aprovarfuncionario">
                <CgSearchLoading size={25} color="#0091BD"/>
                </a>
            </p>
            </div>

            </div>
        </Content>
        </>
    )
};

export default InformationsAprovar;
