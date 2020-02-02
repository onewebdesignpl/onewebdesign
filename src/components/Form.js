import React, {Component} from 'react';
import '../css/form.css';

class Form extends Component {

    state = {
        username: '',
        email: '',
        question: '',
        accept: false,
        message: '',

        errors: {
            email: false,
            accept: false,
        }
    }

    messages = {
        email_incorrect: 'Brak @ w adresie e-mail',
        accept_incorrect: 'Twoja zgoda na przetwarzanie danych osobowych jest wymagana',
    }

    handleChange = (e) => {

        const type = e.target.type;
        const checked = e.target.checked;
        const name = e.target.name;
        const value = e.target.value;

        if (name === "question") {
            this.setState({
                [name]: value
            })
        }

        if (type === "text" || type === "email") {
            this.setState({
                [name]: value
            })
        } else if (type === "checkbox") {
            this.setState({
                [name]: checked 
            })
        }
       
    }

    handleSubmit = (e) => {
        e.preventDefault();


        const validation = this.formValidation();
       
        if (validation.correct) {
            this.setState({
                username: '',
                email: '',
                question: '',
                accept: false,
                message: 'Formularz został wysłany',

                errors: {
                    email: false,
                    accept: false,
                }
            })
            console.log("Formularz wysłany")
        } else {
            this.setState({
                errors: {
                    email: !validation.email,
                    accept: !validation.accept,
                }
            })
        }
    }

    formValidation = () => {
        let email = false;
        let accept = false;
        let correct = false;

        if (this.state.email.indexOf('@') !== -1) {
            email = true;
        }

        if (this.state.accept === true) {
            accept = true;
        }

        if (email && accept === true) {
            correct = true;
        }

        return ({
            email,
            accept,
            correct
        })
    }

    componentDidUpdate() {
        if (this.state.message !== '') {
            setTimeout(() => this.setState({
                message: ''
            }), 3000)
        }
    }

    render() {
        return (
            <>
                <h2>Formularz kontaktowy</h2>
                <form onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="user">Twoje imię: 
                        <input type="text" 
                        id="user" name="username" 
                        value={this.state.username}
                        onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="email">Twój e-mail: 
                        <input type="email" 
                        id="email" name="email" 
                        value={this.state.email}
                        onChange={this.handleChange}/>
                    </label>
                        {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
                    <label htmlFor="question">Twoja wiadomość: 
                        <textarea type="text"
                        id="question" name ="question"
                        value={this.state.question}
                        onChange={this.handleChange}/>
                    </label>
                    <label className="small" htmlFor="accept"> 
                        <input className="checkbox" type="checkbox"
                        id="accept" name="accept" 
                        checked={this.state.accept}
                        onChange={this.handleChange}
                        /> Wyrażam zgodę na przetwarzanie moich danych osobowych
                        {this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}
                    </label>
                    <button>Wyślij</button>
                </form>
                {this.state.message && <h3>{this.state.message}</h3>}
            </>
        )
    }
}

export default Form;