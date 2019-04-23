import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {addUser} from '../Actions/formActions';
import PropTypes from 'prop-types';

const Container = styled.div`
	border: 1px solid lightgrey;
	margin: 8px;
	border-radius: 2px;
	padding: 10px;
`;

const Input = styled.div`
	padding: 5px;
`;

const Buttons = styled.div`
	padding: 10px;
	display: flex;
	justify-content: center;
`;

const Error = styled.div`
	color: red;
`;

class Form extends React.Component{
	state = {
		firstName:'',
		lastName:'',
		userName:'',
		password:'',
		rePassword:'',
		error:''
	}

	handleChange = (event) => {
		const newState = {
			...this.state,
			[event.target.name]: event.target.value
		};
		this.setState(newState);
	};

	passwordValidate = (event) => {
		event.preventDefault();
		const {password,rePassword} = this.state;
		console.log("validating...")

		if(password !== rePassword){
			const newState = {
				...this.state,
				error: "Passwords don't match!"
			};
			this.setState(newState);
			return;
		}

		if(password.length>15 || password.length<8){
			const newState = {
				...this.state,
				error: "Password length Should be 8-15 charactors!"
			};
			this.setState(newState);
			return;
		}
		if(!(password.match(/[!@#$%._-]/))){
			const newState = {
				...this.state,
				error: "Password Should inculde special charactors [!@#$%._-]!"
			};
			this.setState(newState);
				return;
		}
		if (password === rePassword){

			//const len = this.props.State.users(keys()).length;
			const id= 'user-2'
			const newState = {
				...this.props.State,
				users: {
					...this.props.State.users,
					[id]:{id:id, firstName:this.state.firstName, lastName:this.state.lastName, username: this.state.userName, password:this.state.password}
				},
				error: ""
			};
			//console.log("newState: ", newState);
			this.props.addUser(newState);
			return;

			}


	}
	render(){
		return(
			<Container>
				<form onSubmit={this.passwordValidate} >
					<Input>
						FirstName: <input type="text" name= "firstName" placeholder = "Enter FirstName" onChange={this.handleChange.bind(this)} />
					</Input>
					<Input>
						LastName: <input type="text" name="lastName" placeholder = "Enter LastName" onChange={this.handleChange.bind(this)} />
					</Input>
					<Input>
						UserName: <input type="text" name="userName" placeholder = "Enter UserName" onChange={this.handleChange.bind(this)} />
					</Input>
					<Input>
						Password: <input type="password" name="password" placeholder = "Enter New Password" onChange={this.handleChange.bind(this)} />
					</Input>
					<Input>
						Retype Password: <input type="password" name="rePassword" placeholder = "Re-Enter Password" onChange={this.handleChange.bind(this)} />
					</Input>
					<Error>{this.state.error}</Error>
					<Buttons>
						<Buttons><input type='submit' value="Submit"/></Buttons>
						<Buttons><input type='reset' value="Clear"/></Buttons>
					</Buttons>
				</form>
			</Container>
		)
	}
}

Form.propTypes = {
  State: PropTypes.object.isRequired
}

const mapStateToProps=state=>({
   State: state,
 })

export default connect(mapStateToProps,{addUser})(Form);
