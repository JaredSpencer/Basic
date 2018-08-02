import React from 'react';
import {Container, Button, Icon} from 'semantic-ui-react';

interface Props {
  greeting: string
}

const Navbar = (props: Props) => {
  return (
    <Container>
      <Button size='small' color='green'>
        <Icon name='download'/> {props.greeting}
      </Button>
    </Container>
  );
}

export default Navbar;
