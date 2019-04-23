import React, {Component} from 'react';
import styled from 'styled-components';

const Name = styled.h2`

`;

export default class User extends Component {
  render(){
    return(
      <Name>{this.props.user.name}</Name>
    )
  }
}
