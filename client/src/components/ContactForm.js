import React, { Component } from 'react';

const initialValues = {
  name: '',
  message: '',
};

class Form extends Component {
  state = initialValues;

  handleChange = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    return this.props.render({
      values: this.state,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    });
  }
}

class ContactForm extends Component {
  renderView = ({values, handleChange, handleSubmit }) => 
   <form onSubmit={handleSubmit}>
    <div className="field">
      <div className="control">
        <input
          className="input"
          placeholder="Taylor Swift"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          data-testid="name-input"
        />
        <p className="help is-danger">{null}</p>
      </div>
    </div>
    <div className="field">
      <div className="control">
        <textarea
          className="textarea"
          placeholder="messsage"
          type="text"
          name="message"
          value={values.message}
          onChange={handleChange}
          data-testid="message-input"
        />
        <p className="help is-danger">{null}</p>
      </div>
    </div>
    <br />
    <div className="field">
      <div className="control">
        <input
          type="submit"
          value="Submit Form"
          className="button is-primary"
          data-testid="submit-input"
        />
      </div>
    </div>
  </form>;
  
  render() {
    return (
      <Form onSubmit={this.props.onSubmit} render={this.renderView}></Form>
    );
  }
}

export default ContactForm;
