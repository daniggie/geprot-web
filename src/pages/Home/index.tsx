import React, { useState, useEffect, FormEvent } from 'react';
import api from '../services/api';
import { BsSearch, BsGeoAlt } from 'react-icons/bs';


import { string } from 'yargs';
import Repository from '../Repository';
import logo from '../../icons/logo.svg';
import translator_select from '../../icons/translator_select.svg';
import translator_flag from '../../icons/translator_flag.svg';
import exit from '../../icons/exit.svg';
import arrowRight from '../../icons/arrow-right.svg';
import editar from '../../icons/editar.svg';
import cadastrar from '../../icons/cadastrar.svg';
import view from '../../icons/view.svg';
import dashboard from '../../icons/dashboards.svg';
import alocar from '../../icons/alocar.svg';
import relogio from '../../icons/relogio.svg';

import { Header, Menu, All, Content_cards, Filtros, Error, Form } from './style';
import { icons } from 'react-icons';

interface Endereco {
  bairro: string,
  cidade: string,
  logradouro: string,
  estado_info: {
    codigo_ibge: string,
    nome: string
  },
  cep: string;
  cidade_info: {
    area_km2: string
  },
  estado: string
}

const Home: React.FC = () => {
const [newEndereco , setNewEndereco] = useState('');
const [inputError, setInputError] = useState('');
const [repositories, setRepositories] = useState<Endereco[]>(() => {
  const storageEndereco = localStorage.getItem(
    '@EnderecoExplorer:repositories',
  );

  if(storageEndereco){
    return JSON.parse(storageEndereco);
  }
  return [];
});

useEffect(() => {
  localStorage.setItem(
    '@EnderecoExplorer:repositories',
    JSON.stringify(repositories)

    );
}, [repositories]);

async function handleAddRepository(
  event: FormEvent<HTMLFormElement>,
): Promise<void> {
  event.preventDefault();

  if(!newEndereco){
    setInputError("Campo de busca encontra-se vazio!");
    return;
  }

  try{

    const response = await api.get<Endereco>(`cep/${newEndereco}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewEndereco('');
    setInputError('');

  } catch(err){
    setInputError("Endereço não encontrado/inexistente");
  }

}

  return (
    <>
      <Header>
        <div id="informations">

          <div id="logo_weg">
            <img src={logo} alt="logo" />
          </div>

          <div>
            <h1> Gestor </h1>
            <p >Name Gestor Persona </p>
          </div>

        </div>

        <div id="content_translator">

          <div id="translator_select">
            <img src={translator_select} alt="logo" />
          </div>

          <div id="translator_flag">
            <img src={translator_flag} alt="" />
          </div>

          <div id="content_exit">
            <img src={exit} alt="" />
          </div>
        </div>

      </Header>

      <Filtros>

        <div className="content_title">
            <div className="arrow">
              <img src={arrowRight} alt="" />
            </div>

            <div className="texto cor_4">
                Projetos
            </div>
        </div>

        <div className="content_title">
            <div className="arrow">
              <img src={arrowRight} alt="" />
            </div>

            <div className="texto cor_4">
                Status:
            </div>

            <form>
                <select className="status cor_3f" name="status">
                    <option value="status">Todos</option>
                    <option value="status">Andamento</option>
                    <option value="status">Atrasado</option>
                    <option value="status">Concluído</option>
                </select>
            </form>
        </div>

        <div className="content_procurar">
            <div className="arrow">
            <img src={arrowRight} alt="" />
            </div>

            <div className="texto cor_4">
                Procurar:
            </div>
            <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
              <input value={newEndereco} onChange={e => setNewEndereco(e.target.value)} className="procurar cor_0" type="text" id="fname" name="fname" placeholder="Digite o nome do projeto..." />
              <button type="submit" className="cor_3f"><BsSearch size={15}/></button>
            </Form>

        </div>

      </Filtros>

      <All>



      <Content_cards>

      {inputError && <Error>{inputError}</Error>}

      {repositories.map(repository => (

        <div className="card_type" key={repository.cep}>

            <div className="card_status_color yellow">

            </div>

            <div className="card_informacao">

                <div className="linha_1">

                    <div className="card_secao">
                        <div className="cor_4 fonte_12 helvetica ">
                            {repository.cep} - {repository.bairro}
                        </div>
                    </div>

                    <div className="card_status_txt">

                        <div className="fonte_12 helvetica ">
                            Status:
                        </div>

                        <div className="fonte_12 helvetica bold ">
                            Teste
                        </div>

                    </div>
                </div>

                <div className="linha_2">
                    <div className="card_title">

                        <div className="fonte_25 helvetica bold">
                            {repository.estado} - {repository.cidade}
                        </div>

                    </div>

                </div>

                <div className="linha_3">
                    <div className="card_saldo">

                        <div className="fonte_14 helvetica">
                            Saldo previsto:
                        </div>

                        <div className="texto">

                            <div className="texto cor_0 fonte_14 helvetica">
                                R$
                            </div>

                            <div className="texto cor_0 fonte_14 helvetica">
                                {repository.cidade_info.area_km2}
                            </div>

                        </div>



                    </div>

                    <div className="texto_content_horas">
                        <div className="horas fonte_14 helvetica">
                            Horas:
                        </div>
                        <div className="relogio ">
                            <img src={relogio} alt=" " />
                        </div>
                        <div className="cor_0 fonte_14 helvetica">
                          {repository.estado_info.codigo_ibge}
                        </div>

                    </div>

                </div>

                <div className="linha_3">
                    <div className="card_saldo">

                        <div className="fonte_14 helvetica">
                            Saldo restante:
                        </div>

                        <div className="texto">

                            <div className="texto cor_0 fonte_14 helvetica">
                                R$
                            </div>

                            <div className="texto cor_0 fonte_14 helvetica">
                              {repository.cidade_info.area_km2}
                            </div>

                        </div>



                    </div>

                    <div className="texto_content_horas">
                        <div className="fonte_14 helvetica">
                            Apontadas:
                        </div>

                        <div className="relogio">
                            <img src={relogio} alt=" " />
                        </div>

                        <div className="cor_0 fonte_14 helvetica">
                            {repository.estado_info.codigo_ibge}
                        </div>

                    </div>

                </div>

                <div className="linha_3">
                    <div className="texto_content_horas">
                        <div className="cor_0 fonte_14 helvetica">
                            Dê: 02/02/2020
                        </div>

                        <div className="cor_0 fonte_14 helvetica">
                            Até: 05/05/2021
                        </div>

                    </div>

                    <div className="content_barra">

                        <div className="green content_carregamento">

                        </div>

                    </div>

                </div>

            </div>
          </div>
        ))}
        </Content_cards>

        <Menu>
          <div id="menu">

            <div className="content_atalho cor_1f" id="border1">
                <div className="atalho cor_1f" id="border1">
                  <img src={view} alt="" />
                </div>
                <p id="idparagrafo"> VISUALIZAR PROJETOS </p>
            </div>

            <div className="content_atalho cor_2f">
              <div className="atalho cor_2f">
                <img src={cadastrar} alt="" />
              </div>
              <p id="idparagrafo"> CADASTRAR PROJETOS </p>
            </div>

            <div className="content_atalho cor_1f">
              <div className="atalho cor_1f">
                <img src={editar} alt="" />
              </div>
              <p id="idparagrafo"> EDITAR PROJETOS </p>
            </div>

            <div className="content_atalho cor_3f">
              <div className="atalho cor_3f">
                <img src={alocar} alt="" />
              </div>
              <p id="idparagrafo"> ALOCAR CONSULTORES </p>
            </div>

            <div className="content_atalho cor_4f" id="border2">

                <div className="atalho cor_4f" id="border2">
                  <img src={dashboard} alt="" />
                </div>
                <p id="idparagrafo">
                  <a href="/dashboard">IR PARA DASHBOARDS
                  </a>
                </p>
           </div>
          </div>
        </Menu>

      </All>

    </>
  );
};

export default Home;
