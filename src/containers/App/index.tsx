import React from 'react';
import {Container, Button, Icon} from 'semantic-ui-react';
import Navbar from './../Navbar';

export default function App() {
  return (
    <Container>
      <Button size='small' color='green'>
        <Icon name='download'/>
        I'm a Button!
      </Button>
      <Navbar greeting={'Hey'}/>
    </Container>
  );
}
