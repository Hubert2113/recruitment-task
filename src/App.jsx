import { Component } from 'react';
import { FormSection } from './components/Form/Form';
import { DataComponent } from './components/Table/Data';
import { PaginationComponent } from './components/Pagination/Pagination';
import axios from 'axios';
import Notiflix from 'notiflix';

export class App extends Component {

  state = {
    inputValue: '',
    product: '',
    page: 1,
  }

  handleChange = (ev) => {
    this.setState({ inputValue: ev.target.value });
  }

  getData = async (ev, page) => {
    ev.preventDefault();
    await axios.get(`https://reqres.in/api/products?page=${page}&per_page=5&id=${this.state.inputValue}`)
    .then(response => {
      this.setState({
        product: response.data.data,
        page: page,
      });
      Notiflix.Notify.success('Success');
    })
    .catch(error => {
      Notiflix.Notify.error(error);
    });
  }

  render(){
    return (
      <>
        <section>
          <FormSection 
            inputValue={this.state.inputValue}
            handleChange={this.handleChange}
            handleSubmit={(ev) => this.getData(ev, this.state.page)}
          />
        </section>
        <section>
          <DataComponent 
            data={this.state.product}
          />
        </section>
        <section>
          <PaginationComponent
            handlePaginationDecrement={(ev) => this.getData(ev, this.state.page-1)}
            handlePaginationIncrement={(ev) => this.getData(ev, this.state.page+1)}
          />
        </section>
      </>
    );
  }
}

