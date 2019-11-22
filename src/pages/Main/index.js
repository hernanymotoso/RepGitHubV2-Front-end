import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import Container from '../../components/Container';
import { Form, SubmitButton } from './styles';

export default class Main extends Component {
  	state = {
  		newRepo: '',
  		loading: false,
  	}


  	handleInputChange = e => {
  		this.setState({
  			newRepo: e.target.value,
  		});
  	}

  	handleFormSubmit = e => {
  		e.preventDefault();
  		this.setState({
  			loading: true,
  		});
  		console.log(this.state.newRepo);

  		this.setState({
  			loading: false,
  		});
  	}

	render () {
		const { newRepo, loading } = this.state;

		return (
  			<Container>
  				<h1>
  					<FaGithubAlt />
  					Repositórios
  				</h1>

  				<Form onSubmit={this.handleFormSubmit}>
  					<input
  						type="text"
  						placeholder="Adicionar repositório"
  						value={newRepo}
  						onChange={this.handleInputChange}
  					/>

  					<SubmitButton>
  						{ loading ? <FaSpinner color="#FFF" size={14} /> : <FaPlus color="#FFF" size={14} /> }	  						
  					</SubmitButton>

  				</Form>
  			</Container>

  		);
	}
}
