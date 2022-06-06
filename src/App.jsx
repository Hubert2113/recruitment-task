import { Component } from 'react';
import { FormSection } from './components/Form/Form';
import { DataComponent } from './components/Table/Data';
import axios from 'axios';

export class App extends Component {

  state = {
    query: '',
    inputValue: "",
  }

  handleChange = (ev) => {
    this.setState({ inputValue: ev.target.value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ query: this.state.inputValue });
  }

  getData = () => {
    return axios({
      method: 'get',
      url: '',
    });
  }

  render(){
    return (
      <>
        <section>
          <FormSection 
            inputValue={this.state.inputValue}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
        <section>
          <DataComponent />
        </section>
      </>
    );
  }
}

