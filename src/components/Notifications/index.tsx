import React from 'react';
import {  Container } from './style';

import { FaUserCircle } from "react-icons/fa";

const Notifications: React.FC = () => {
  return(
    <>
      <Container>
          <div className="not">
            <div className="not_info">
                  <FaUserCircle />
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
