import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./Form.scss";
import { Link } from "react-router-dom";
import { startLoading, stopLoading } from './../../store/global/globalActions';
import { connect } from 'react-redux';

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
            imgUrl: '',
            isButtonDisabled: true,
            isFormBeingSent: false,
            successfulPOST: false
        };
    }

    handleChange = (e) => {
        const value = e.target.value;
        const field = e.target.name;

        this.setState({
            [field]: value,
        }, () => {
            this.isFormCompleted();
        });
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

    handleSubmit = () => {
        this.props.startLoading();
        this.setState({
            isFormBeingSent: true
        })
        fetch('create-phone', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then((response) => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    successfulPOST: true,
                    isFormBeingSent: false
                })
                this.props.stopLoading();
            });
    };

    render() {
        return (
            this.state.successfulPOST
                ?
                <div className="form__hint">
                    <p >Your phone has been successfully created.</p>
                    <Link to="/">
                        <Button variant="outlined" size="large">Go to catalog</Button>
                    </Link>
                </div >
                :
                !this.state.isFormBeingSent &&
                <form className="form">
                    <div className="input__container">
                        <TextField
                            id="name"
                            required
                            name='name'
                            variant='outlined'
                            label='Name'
                            onKeyUp={this.handleChange}
                        />
                    </div>
                    <div className="input__container">
                        <TextField
                            id="imgUrl"
                            required
                            name='imgUrl'
                            variant='outlined'
                            label='Image URL'
                            onKeyUp={this.handleChange}
                        />
                    </div>
                    <div className="input__container">
                        <TextField
                            id="manufacturer"
                            required
                            name='manufacturer'
                            variant='outlined'
                            label='Manufacturer'
                            onKeyUp={this.handleChange}
                        />
                    </div>
                    <div className="input__container">
                        <TextField
                            id="color"
                            required
                            name='color'
                            variant='outlined'
                            label='Color'
                            onKeyUp={this.handleChange}
                        />
                    </div>
                    <div className="input__container">
                        <TextField
                            id="price"
                            type="number"
                            required
                            name='price'
                            variant='outlined'
                            label='Price'
                            onKeyUp={this.handleChange}
                        />
                    </div>
                    <div className="input__container">
                        <TextField
                            id='screen'
                            required
                            name='screen'
                            variant='outlined'
                            label='Screen'
                            onKeyUp={this.handleChange}
                        />
                    </div>
                    <div className="input__container">
                        <TextField
                            id='processor'
                            required
                            name='processor'
                            variant='outlined'
                            label='Processor'
                            onKeyUp={this.handleChange}
                        />
                    </div>
                    <div className="input__container">
                        <TextField
                            id='ram'
                            required
                            name='ram'
                            variant='outlined'
                            label='RAM'
                            onKeyUp={this.handleChange}
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
                            onKeyUp={this.handleChange}
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
                            onKeyUp={this.handleChange}
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

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = {
    startLoading,
    stopLoading
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
