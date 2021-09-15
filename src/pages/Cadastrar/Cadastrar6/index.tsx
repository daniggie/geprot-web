import React  from 'react';
import { Titulo, Formulario } from './style';
import Barra from "../../../components/Barra";
import BotaoFinalizar from '../../../components/Buttons/ButtonFinalizar';
import { BsFillCaretRightFill, BsX } from "react-icons/bs";
import { BiReceipt } from "react-icons/bi";

const Cadastrar6: React.FC = () => {
    return (
      <>
        <Barra>
        </Barra>

      <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">Resumo</p>
        </Titulo>
        <Titulo>
          <a href="/cadastrar"><b className="helvetica fonte_15 cor_0">Cadastro de projetos</b></a>
          <BsFillCaretRightFill color="#828282"/>
          <a href="/cadastrar4"><b className="helvetica fonte_15 cor_0">Centro de custos</b></a>
          <BsFillCaretRightFill color="#828282"/>
          <a href="/cadastrar5"><b className="helvetica fonte_15 cor_0">Alocação  </b></a>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_5 normal"> <u> Resumo </u> </b>
        </Titulo>
        <Formulario>
          <p className="helvetica fonte_25 cor_3 bold"> NOME DO PROJETO</p>
          <p className="helvetica fonte_20 cor_3 lighter">Seção X <b className="helvetica fonte_20 cor_0 lighter">000000</b></p>
          <div className="content">

            <div className="line">
              <b className="helvetica fonte_20 cor_3 bold">Geral</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">ID PPM:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">00000001</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">Lara Hanna</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">SOLICITANTE:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">Rodrigo Loudres</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">PREVISÃO</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">13/05/2021 á 25/02/2022</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">VERBA:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">R$    80.000,00</b>
              </div>
            </div>

            <div className="line">
              <b className="helvetica fonte_20 cor_3 bold">Centro de custos</b>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">% </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">% </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">% </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">% </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00</b>
              </div>
            </div>


          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_20 cor_3 bold">Aprovação</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">ID aprovação:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">00000001</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">Data da aprovação:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">20/05/2021</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">ID Comissão:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">00000001</b>
              </div>
            </div>

            <div className="line">
              <div className="download">
                <p className="helvetica fonte_13 cor_0 bold">ATA_COMISSÃO_001</p>
                <BiReceipt color="#00579D" size={25}/>
              </div>
            </div>

            <div className="line">
              <div className="download">
                <p className="helvetica fonte_13 cor_0 bold">ATA_DG</p>
                <BiReceipt color="#00579D" size={25}/>
              </div>

            </div>

            <div className="line">
              <b className="helvetica fonte_20 cor_3 bold">Descrição</b>
            </div>

            <div className="borderstyle">
              <p className="helvetica fonte_13 cor_0 lighter">
              Lorem ipsum dolor sit amet. Qui natus dicta ea harum
              laudantium id nisi magni ea expedita consequatur ut nostrum
              quae sed animi delectus id recusandae dolores? Hic sunt
               obcaecati sed quia rerum ex vitae optio rem quibusdam
               nesciunt ut voluptas iusto et quia amet! Voluptatem
               voluptas et ipsum modi ut cumque enim in cupiditate
               aliquid est nisi quae. Eum vitae eaque vel quisquam
               enim veritatis commodi ut temporibus obcaecati et vo
               luptate autem aut officia numquam hic expedita conse
               quatur.
              </p>
            </div>
          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_20 cor_3 bold">Consultores</b>
            </div>

            <div className="table">

              <div className="header">

                <div className="title1 bold helvetica cor_0 fonte_15">
                  Consultor
                </div>

                <div className="title2 bold helvetica cor_0 fonte_15">
                  Horas
                </div>

              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1 fonte_13">
                  Ludicir Rodrigues
                </div>

                <div className="column2 fonte_13">
                  90 H
                </div>

              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1 fonte_13">
                  Gilwedor Silva
                </div>

                <div className="column2 fonte_13">
                  90 H
                </div>

              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1 fonte_13">
                  Gabriela Gonsalves
                </div>

                <div className="column2 fonte_13">
                  90 H
                </div>

              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1 fonte_13">
                  Lorena Rorges
                </div>

                <div className="column2 fonte_13">
                  90 H
                </div>

              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1 fonte_13">
                  Hiego Luciman
                </div>

                <div className="column2 fonte_13">
                  90 H
                </div>

              </div>

            </div>

          </div>

          <div className="position">
            <a href="/home">
            <BotaoFinalizar />
            </a>
          </div>
        </Formulario>
      </>
    );
}
export default Cadastrar6;
