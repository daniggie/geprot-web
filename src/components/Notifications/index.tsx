import React from 'react';
import {  Container } from './style';

import { FaUserCircle } from "react-icons/fa";
import NotificacaoAlert from '../NotificacaoAlert';

const Notifications: React.FC = () => {
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

                <NotificacaoAlert />
                <NotificacaoAlert />
                <NotificacaoAlert />

            </div>

            <div className="arrow">
                <div id="triangle_off">
                </div>

                <div id="triangle_on">
                </div>
            </div>



          </div>

        </Container>
    </>
  );
};

export default Notifications;
