import React from 'react';
import {  Container } from './style';

import { FaUserCircle } from "react-icons/fa";

const Notifications: React.FC = () => {
  return(
    <>
      <Container>
          <div className="not">
            <div className="not_info">
                <div className="icones">
                  <div className="icon_off">
                    <FaUserCircle size={25}/>
                  </div>

                  <div className="icon_on">
                    <FaUserCircle size={40}/>
                  </div>
                </div>

                <div className="line">
                  Insira notificação insira notificação
                </div>

                <div className="line">
                  Insira notificação insira notificação
                </div>

                <div className="line">
                  Insira notificação insira notificação
                </div>

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
