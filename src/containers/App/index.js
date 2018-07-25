import React from 'react';

import FormContainer from '../Form';
import {Container, Button, Icon} from 'semantic-ui-react';

export default function App() {
  return (
    <Container>
      <Button size='small' color='green'>
        <Icon name='download'/>
        I'm a Button!
      </Button>
    </Container>
  );
}
