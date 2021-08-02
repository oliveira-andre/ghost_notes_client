import React from 'react';
import { Project, Row } from 'arwes';

import { Background } from './Modal.styles';

const Modal = (props) => {
  const { title, children } = props;
  return(
    <>
      <Background />
      <Row col s={6} m={4} offset={['s3', 'm4']}>
        <Project
          animate
          header={title}
          style={{ marginTop: 200 }}
        >
          {anim => (
            <>
              { children }
            </>
          )}
        </Project>
      </Row>
    </>
  );
}

export default Modal;
