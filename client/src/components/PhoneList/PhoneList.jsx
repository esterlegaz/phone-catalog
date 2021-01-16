import React from "react";
import "./PhoneList.scss";
import PhoneItem from './../PhoneItem/PhoneItem';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

class PhoneList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.listMenuItems();
    }

    listMenuItems = () => {
        this.setState({
            isLoading: true
        })
        fetch("/phones")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    phones: data
                });
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            });
    };

    render() {
        return (
            <>
                {this.state.isLoading ?
                    <div className="spinner__container">
                        <CircularProgress size="5rem" disableShrink />
                    </div>
                    :
                    <>
                        <div className="form__hint">
                            <p>Do you want to add a new phone?</p>
                            <Link to="/form">
                                <Button variant="outlined" size="large">Click here</Button>
                            </Link>
                        </div>

                        {this.state.phones && this.state.phones.length > 0 && (
                            <>
                                <h2 className="list__title">Find your phone</h2>
                                <ul className="list__container">
                                    {this.state.phones.map((phone, index) => {
                                        return (
                                            <PhoneItem
                                                key={index}
                                                id={"phone-" + phone.id.toString()}
                                                information={phone}
                                            />
                                        );
                                    })}
                                </ul>
                            </>
                        )}
                    </>
                }
            </>
        )
    }
}

export default PhoneList;