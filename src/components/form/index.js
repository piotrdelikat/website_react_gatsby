import React from 'react';
import './_form.scss'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      isSubmited: false,
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();

    //POST request
    this.setState({
      isSubmited: true
    }) //should be set if response code === 200
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
     this.setState({
      [name]: value
    });
  }

  render () {
    const form = !this.state.isSubmited ?  
    <form className="mx-auto" onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label>Name<span className='required'>*</span></label>
        <input type="text" name="Name" value={this.state.Name} onChange={this.handleChange} pattern="[A-z]{1,50}" title="Name should only contain letters. e.g. John Deer" required  />
      </div>
      <div className="form-group">
        <label>Email<span className='required'>*</span></label>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} title="Please submit a valid email adress e.g. john@scott.co" required />
      </div>
      <div className="form-group form-group-message">
      <label>Message</label>
        <textarea rows="1" name="message" value={this.state.message} onChange={this.handleChange} />
      </div>
      <button type="submit" value="Confirm" className="btn">SEND</ button>
    </form> :
    <p className="submit-message">
        Thank you {this.state.Name} for contacting us.
        We will respond to you at {this.state.email} A$AP.
    </p>

    return (
        <div className="form-body">
            {form}
        </div> 
    )
  }
}
export default Form;
