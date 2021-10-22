import React, { Component } from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import  './Login.css';
import firebase from '../../firebase';

class Login extends Component {
    state={
        email:'',
        password:'',
        loading:false, 
        errors:[]
    }

    handleChange=(event)=>{
        const {name, value}= event.target;
        this.setState({[name]: value})
    }

    isFormValid=()=>{
        if(!(this.state.email && this.state.password)){
            const error={message: 'Email or Password is empty'}
            this.setState({errors:[error]})
            return false
        }
        return true
    }

    displayErrors=(errors)=> errors.map((error,i)=><p key={i}>{error.message}</p>)
    
    handleInputErrors=(errors, inputName)=>{
        return errors.some(error=>error.message.toLowerCase().includes(inputName))?'error':'';
    }

    handleSubmit=(event)=>{
        event.preventDefault();

        if(this.isFormValid()){
            this.setState({errors:[], loading: true})

            const {email, password}= this.state;
            
            firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then((signedInUser)=>{
                    console.log(signedInUser)
                    this.setState({loading: false})
                    this.props.history.push('/home')
                }).catch(err=>{
                    console.log(err);
                    this.setState({errors:[err], loading: false})
                })
        }
    }
    
    render() {
        const {email, password, loading, errors}= this.state;
        return (
            <Grid textAlign='center' verticalAlign='middle' className='app'>
            <Grid.Column style={{maxWidth:450}}>
                <Header as='h2' icon color='violet'>
                    <Icon name='code branch' color='violet'></Icon>
                    Login to work-to-do
                </Header>
                <Form size='large' onSubmit={this.handleSubmit}>
                    <Segment stacked>
                        <Form.Input fluid name='email' icon='mail' iconPosition='left'
                            placeholder='Email Address' type='email' value={email}
                            className={this.handleInputErrors(errors,'email')}
                            onChange={this.handleChange}>
                        </Form.Input>
                        <Form.Input fluid name='password' icon='lock' iconPosition='left'
                            placeholder='Password' type='password' value={password}
                            className={this.handleInputErrors(errors,'password')}
                            onChange={this.handleChange}>
                        </Form.Input>
                        <Button className={loading? 'loading':''} color='violet' fluid size='large'>Login</Button>
                    </Segment>
                </Form>

                {errors.length>0 && (<Message error>
                        <h3>Error</h3>
                        {this.displayErrors(errors)}
                </Message>)}

                <Message >
                    Don't have an account? <Link to='/register'>Register</Link>
                </Message>

            </Grid.Column>
        </Grid>
        )
    }
}

export default Login
