import React, { useState, useEffect, FormEvent } from 'react';
import api from '../../services/api';
import { BsSearch, BsGeoAlt } from 'react-icons/bs';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import arrowRight from '../../icons/arrow-right.svg';
import relogio from '../../icons/relogio.svg';

import { All, Content_cards, Filtros, Error, Form } from './style';

interface Projeto {
  idprojeto: Number,
  nomeprojeto: string,
  datainicio: Date,
  datafinalizacao: Date,
  horasprevistas: Number,
  horastrabalhadas: Number,
  valorprojeto: Number,
  valorutilizado: Number,
  valorrestante: Number,
  statusprojeto: String
}

const Home: React.FC = () => {
const [newEndereco , setNewEndereco] = useState('');
const [inputError, setInputError] = useState('');
const [repositories, setRepositories] = useState<Projeto[]>(() => {
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

    const response = await api.get<Projeto>(`projetos/listar`);
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

        <div className="card_type" key={repository.nomeprojeto}>

            <div className="card_status_color yellow">

            </div>

            <div className="card_informacao">

                <div className="linha_1">

                    <div className="card_secao">
                        <div className="cor_4 fonte_12 helvetica ">
                            {repository.horasprevistas} - {repository.horastrabalhadas}
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
                            {repository.idprojeto} - {repository.nomeprojeto}
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
                                {repository.nomeprojeto}
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
                          {repository.valorutilizado}
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
                              {repository.statusprojeto}
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
                            {repository.statusprojeto}
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
        </Menu>

      </All>

    </>
  );
};

export default Home;
