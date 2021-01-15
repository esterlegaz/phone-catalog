import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./Form.scss";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            manufacturer: '',
            color: '',
            price: '',
            screen: '',
            processor: '',
            ram: '',
            description: '',
            extraInfo: '',
            isButtonDisabled: true
        };
    }

    handleChange = (e) => {
        const value = e.target.value;
        const field = e.target.name;

        this.setState({
            [field]: value,
        });
        this.isFormCompleted();
    };

    isFormCompleted = () => {
        const stateValues = Object.values(this.state);
        const isEmpty = (element) => element === '';
        const emptyValue = stateValues.findIndex(isEmpty);
        if (emptyValue === -1) {
            this.setState({
                isButtonDisabled: false
            })
        } else {
            this.setState({
                isButtonDisabled: true
            })
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        await fetch('create-phone', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        });
    };

    render() {
        return (
            <form className="form">
                <div className="input__container">
                    <TextField
                        required
                        name='name'
                        variant='outlined'
                        label='Name'
                        onKeyUp={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        required
                        name='manufacturer'
                        variant='outlined'
                        label='Manufacturer'
                        onKeyUp={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        required
                        name='color'
                        variant='outlined'
                        label='Color'
                        onKeyUp={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        required
                        name='price'
                        variant='outlined'
                        label='Price'
                        onKeyUp={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        required
                        name='screen'
                        variant='outlined'
                        label='Screen'
                        onKeyUp={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        required
                        name='processor'
                        variant='outlined'
                        label='Processor'
                        onKeyUp={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        required
                        name='ram'
                        variant='outlined'
                        label='RAM'
                        onKeyUp={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        required
                        name='description'
                        label='Short description'
                        multiline
                        rows={2}
                        variant='outlined'
                        onKeyUp={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        required
                        name='extraInfo'
                        label='Detailed description'
                        multiline
                        rows={4}
                        variant='outlined'
                        onKeyUp={this.handleChange}
                    />
                </div>

                <Button
                    onClick={this.handleSubmit}
                    color='primary'
                    autoFocus
                    variant='outlined'
                    disabled={this.state.isButtonDisabled}
                >
                    Send
            </Button>
            </form>
        )
    }
}

export default Form;