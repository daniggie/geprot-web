import React, {useState, useEffect} from 'react';
import {  Container } from './style';

import { FaUserCircle } from "react-icons/fa";
import NotificacaoAlert from '../NotificacaoAlert';
import { api } from '../../services/api';

interface Notificacao {
  id: number;
  descricao: string;
  usuario: {
    id: number;
    nome: string;
    email: string;
    dataCadastro: string;
    status: boolean;
  },
  data: string;
  statusLeitura: boolean;
}


const Notifications: React.FC = () => {
  const [noticacoes, setNotificacoes] = useState<Notificacao[]>([]);

  const token = localStorage.getItem("@Geprot:token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
  const [perfil] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:gestor'); 
    if (usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
      }
  });

  useEffect(() => {
    const carregaPadrao = async () => {
      await api.get(`notificacoes/${perfil.usuario.id}`, config).then(response => {
        setNotificacoes(response.data)
      })
    } 
    console.log(noticacoes.length)
  })

  
  return(
    <>
      <Container>
		<div className="not">
			<div className="not_info">
				<div className="icones">
				  <div className="icon_off">
					<FaUserCircle size={25} color="#00579E"/>
				  </div>
				<div className="number cor_000"> 6 </div>

				<div className="icon_on" >
					<FaUserCircle size={40} color="#00579E"/>
				</div>
			</div>
      {
        noticacoes.map(notificacao => {
          <NotificacaoAlert 
          id={notificacao.id}
          idUsuario = {notificacao.usuario.id}
          dataCadastro = {notificacao.usuario.dataCadastro}
          data={notificacao.data}
          descricao= {notificacao.descricao}
          nome={notificacao.usuario.nome}
          email={notificacao.usuario.email}
          status={notificacao.usuario.status}
          statusLeitura = {notificacao.statusLeitura}
          />
      })}
			
        </div>
      </div>
      </Container>
    </>
  );
};

export default Notifications;
