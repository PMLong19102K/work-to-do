import React, { Component } from 'react'
import {Button, Grid, Header, Input, Segment} from 'semantic-ui-react'
import logo from '../logo.png'
class App extends Component {
  changLogin=()=>{
    this.props.history.push('/login')
  }
  changRegister=()=>{
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        <Header>
          <Segment>
            <Grid >
              <Grid.Column width={3}>
                <img src={logo}  width='35'/>
              </Grid.Column>

              <Grid.Column width={5}>
                <Input fluid icon='search' placeholder='Search'/>
              </Grid.Column>

              <Grid.Column width={2}>
                <Button fluid size='large' color='green' onClick={this.changLogin}>Login</Button>
              </Grid.Column>

              <Grid.Column width={2}>
                <Button fluid size='large' color='olive' onClick={this.changRegister}>Register</Button>
              </Grid.Column>
            </Grid>
           </Segment>
        </Header>
      </div>
    )
  }
}

export default App
