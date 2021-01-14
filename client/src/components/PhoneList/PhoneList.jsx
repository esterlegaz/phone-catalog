import React from "react";
import "./PhoneList.scss";
import PhoneItem from './../PhoneItem/PhoneItem';
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
                        <h2 className="list__title">Find your phone</h2>
                        {this.state.phones && (
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
                        )}
                    </>
                }
            </>
        )
    }
}

export default PhoneList;