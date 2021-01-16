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
                        id="name"
                        required
                        name='name'
                        variant='outlined'
                        label='Name'
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        id="manufacturer"
                        required
                        name='manufacturer'
                        variant='outlined'
                        label='Manufacturer'
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        id="color"
                        required
                        name='color'
                        variant='outlined'
                        label='Color'
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        id="price"
                        required
                        name='price'
                        variant='outlined'
                        label='Price'
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        id='screen'
                        required
                        name='screen'
                        variant='outlined'
                        label='Screen'
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        id='processor'
                        required
                        name='processor'
                        variant='outlined'
                        label='Processor'
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        id='ram'
                        required
                        name='ram'
                        variant='outlined'
                        label='RAM'
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        id='description'
                        required
                        name='description'
                        label='Short description'
                        multiline
                        rows={2}
                        variant='outlined'
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input__container">
                    <TextField
                        id='extraInfo'
                        required
                        name='extraInfo'
                        label='Detailed description'
                        multiline
                        rows={4}
                        variant='outlined'
                        onChange={this.handleChange}
                    />
                </div>

                <Button
                    id="formLink"
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