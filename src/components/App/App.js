import React, { Component } from 'react';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import { Container, Header, Message, Button } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <Container>
      <Message>
          <Header as='h1'>Hello, world!</Header>
          <p>
            This is a template for a simple marketing or informational website. It includes a large callout called a
            jumbotron and three supporting pieces of content. Use it as a starting point to create something more
            unique.
          </p>
          <Button color='blue'>Learn more &raquo;</Button>
        </Message>
        </Container>
    );
  }
}

export default observer(App);
