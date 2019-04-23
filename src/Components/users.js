import React, {Component} from 'react';
import styled from 'styled-components';
import User from './user';
import { connect } from 'react-redux';
import {fetchData} from '../Actions/formActions';
import PropTypes from 'prop-types';
import axios from 'axios';

const Container = styled.div`

`;

export default class Users extends Component{
  constructor(props){
    super(props);
    this.state = {users:{}}
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({ users: res.data }));
  }
  //state = {users:{}}
  // componentWillMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //       .then(res => this.setState({ users: res.data }));
  // 	}
//{this.state.users.map((user, index) => {return <User key={index} user={user}/>})}
//{console.log("State: ",this.props.State)}
//<Container>
//     {console.log("newState", this.state)}
//
// </Container>
  render(){
    if (Object.keys(this.state.users).length > 0){
      return this.state.users.map((user)=>{return <User key={user.id} user={user}/>})
    }
    return(
      <Container>
      </Container>
    )
    // return (<Container>
    //      {console.log("newState", this.state)}
    //      {Object.keys(this.state.users).length > 0?this.state.users.map((user, index) => {return <User key={index} user={user}/>}):false)}
    //  </Container>)


  }
}

// Users.propTypes = {
//   State: PropTypes.object.isRequired
// }
//
// const mapStateToProps=state=>({
//    State: state,
//  })
//
//  connect(mapStateToProps,{fetchData})(Users);
