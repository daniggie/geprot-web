import React, { useCallback, useRef } from 'react';
import { Titulo, Formulario } from './style';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import Barra from "../../../components/Barra";
import BotaoAvancar from '../../../components/Buttons/ButtonAvancar';
import api from '../../../services/api';
import { useToast } from '../../../hooks/toast';
import getValidationErrors from '../../../utils/getValidationErrors';
import { useHistory } from 'react-router';
import { Form } from '@unform/web';



interface CadastraProjeto {
  nome: string,
  nomeSolicitante: string,
  dataFinalizacao: Date,
	dataInicio: Date,
	nomeResponsavel: string ,
}

const Cadastrar: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: CadastraProjeto) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          //name: Yup.string().required('Nome obrigatório'),
         // email: Yup.string()
            //.required('E-mail obrigatório')
           // .email('Digite um e-mail válido'),
         // password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/projetos/cadastrar', data);
        console.log(data)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          console.log(err)
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description:
            'Ocorreu um erro ao realizar o cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

    return (
      <>
        <Barra/ >

      <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">CADASTRO DE PROJETOS</p>
        </Titulo>
        <Form ref={formRef} onSubmit={handleSubmit}>
        <Formulario>
          <p className="helvetica fonte_20 cor_5 bold">IDENTIFICADORES</p>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">ID Projeto:</b>
              <b className="helvetica fonte_15 cor_3 bold">ID PPM:</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <input type="text" placeholder="000000000" />
              </div>
              <div className="tamanho">
                <input type="text" placeholder="000000000" />
              </div>

            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Nome do Projeto:</b>
            </div>

            <div className="line">
                <input type="text" name="nome" placeholder="Digite aqui..." />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Nome do solicitante:</b>
            </div>

            <div className="line">
                <input type="text" name="nomeSolicitante" placeholder="Digite aqui..." />
            </div>

          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Data de inicio:</b>
              <b className="helvetica fonte_15 cor_3 bold">Data de encerramento:</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <input type="date"  name="dataInicio"/>
              </div>
              <div className="tamanho">
                <input type="date" name="dataFinalizacao" />
              </div>
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Nome do responsável:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="Digite aqui..." name="nomeResponsavel" />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Nome no sistema:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="Digite aqui..." />
            </div>

          </div>


          <div className="position">
            <a href="/cadastrar2" type="submit">
            <BotaoAvancar>
            <p className="helvetica fonte_20 bold">Próximo</p>
            </BotaoAvancar>
            </a>
          </div>
        </Formulario>
        </Form>
        </>
    );
}
export default Cadastrar;
