import React from "react";
import { All } from "./style";
import Barra from "../../components/Barra";
import { AiFillCheckCircle, AiFillExclamationCircle, AiFillCloseCircle } from "react-icons/ai";
import { CgSearchLoading } from "react-icons/cg";

const AprovarHoras: React.FC = () => {
    return(
      <>
      <Barra />

      <All>

        <p className="helvetica cor_0 lighter fonte_20">Seção X</p>
        <p className="helvetica cor_3 lighter fonte_25">100000000001 -  Projeto GDT</p>

        <div className="table">

          <div className="header">
            <div className="title1">
              <p className="helvetica bold cor_0">Cadastro</p>
            </div>

            <div className="title1">
              <p className="helvetica bold cor_0">Status</p>
            </div>

            <div className="title2">
              <p className="helvetica bold cor_0">Nome Completo</p>
            </div>

            <div className="title2">
              <p className="helvetica bold cor_0">Fornecedor</p>
            </div>

            <div className="title1">
              <p className="helvetica bold cor_0">Aprovação</p>
            </div>

            <div className="title1">
              <p className="helvetica bold cor_0">Horas</p>
            </div>

            <div className="title1">
              <p className="helvetica bold cor_0"></p>
            </div>

          </div>

          <div className="informations">
              <div className="columns">
                <div className="column1">
                    <p className="helvetica light fonte_15 cor_0">000000</p>
                </div>

                <div className="column1">
                  <p className="helvetica light fonte_15 cor_0">Inativo</p>
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

              <div className="columns">
                <div className="column1">
                    <p className="helvetica light fonte_15 cor_0">000000</p>
                </div>

                <div className="column1">
                  <p className="helvetica light fonte_15 cor_0">Inativo</p>
                </div>

                <div className="column2">
                <p className="helvetica light fonte_15 cor_0">Persons name</p>
                </div>

                <div className="column2">
                <p className="helvetica light fonte_15 cor_0">Providers name</p>
                </div>

                <div className="column1">
                <p className="helvetica light fonte_15 cor_0"> <AiFillExclamationCircle size={25} color="#0091BD"/></p>
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

              <div className="columns">
                <div className="column1">
                    <p className="helvetica light fonte_15 cor_0">000000</p>
                </div>

                <div className="column1">
                  <p className="helvetica light fonte_15 cor_0">Inativo</p>
                </div>

                <div className="column2">
                <p className="helvetica light fonte_15 cor_0">Persons name</p>
                </div>

                <div className="column2">
                <p className="helvetica light fonte_15 cor_0">Providers name</p>
                </div>

                <div className="column1">
                <p className="helvetica light fonte_15 cor_0"> <AiFillCloseCircle size={25} color="#0091BD"/></p>
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

              <div className="columns">
                <div className="column1">
                    <p className="helvetica light fonte_15 cor_0">000000</p>
                </div>

                <div className="column1">
                  <p className="helvetica light fonte_15 cor_0">Inativo</p>
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

              <div className="columns">
                <div className="column1">
                    <p className="helvetica light fonte_15 cor_0">000000</p>
                </div>

                <div className="column1">
                  <p className="helvetica light fonte_15 cor_0">Inativo</p>
                </div>

                <div className="column2">
                <p className="helvetica light fonte_15 cor_0">Persons name</p>
                </div>

                <div className="column2">
                <p className="helvetica light fonte_15 cor_0">Providers name</p>
                </div>

                <div className="column1">
                <p className="helvetica light fonte_15 cor_0"> <AiFillExclamationCircle size={25} color="#0091BD"/></p>
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

              <div className="columns">
                <div className="column1">
                    <p className="helvetica light fonte_15 cor_0">000000</p>
                </div>

                <div className="column1">
                  <p className="helvetica light fonte_15 cor_0">Inativo</p>
                </div>

                <div className="column2">
                <p className="helvetica light fonte_15 cor_0">Persons name</p>
                </div>

                <div className="column2">
                <p className="helvetica light fonte_15 cor_0">Providers name</p>
                </div>

                <div className="column1">
                <p className="helvetica light fonte_15 cor_0"> <AiFillCloseCircle size={25} color="#0091BD"/></p>
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

              <div className="columns">
                <div className="column1">
                    <p className="helvetica light fonte_15 cor_0">000000</p>
                </div>

                <div className="column1">
                  <p className="helvetica light fonte_15 cor_0">Inativo</p>
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

              <div className="columns">
                <div className="column1">
                    <p className="helvetica light fonte_15 cor_0">000000</p>
                </div>

                <div className="column1">
                  <p className="helvetica light fonte_15 cor_0">Inativo</p>
                </div>

                <div className="column2">
                <p className="helvetica light fonte_15 cor_0">Persons name</p>
                </div>

                <div className="column2">
                <p className="helvetica light fonte_15 cor_0">Providers name</p>
                </div>

                <div className="column1">
                <p className="helvetica light fonte_15 cor_0"> <AiFillExclamationCircle size={25} color="#0091BD"/></p>
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

              <div className="columns">
                <div className="column1">
                    <p className="helvetica light fonte_15 cor_0">000000</p>
                </div>

                <div className="column1">
                  <p className="helvetica light fonte_15 cor_0">Inativo</p>
                </div>

                <div className="column2">
                <p className="helvetica light fonte_15 cor_0">Persons name</p>
                </div>

                <div className="column2">
                <p className="helvetica light fonte_15 cor_0">Providers name</p>
                </div>

                <div className="column1">
                <p className="helvetica light fonte_15 cor_0"> <AiFillCloseCircle size={25} color="#0091BD"/></p>
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


            </div>

        </div>

      </All>
      </>
    );
};

export default AprovarHoras;
