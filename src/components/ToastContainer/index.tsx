import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './style';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    keys: (message) => message.id,
    from: { bottom: '-120%' },
    enter: { bottom: '0%' },
    leave: { bottom: '-120%' },
  });

  return (
    <Container>
      {messagesWithTransitions((style, item, t) => (
        <Toast key={t.key} style={style} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
