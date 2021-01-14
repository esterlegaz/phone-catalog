import React from "react";
import "./PhoneList.scss";
import PhoneItem from './../PhoneItem/PhoneItem';

class PhoneList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: []
        };
    }

    componentDidMount() {
        this.listMenuItems();
    }

    listMenuItems = () => {
        fetch("/phones")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    phones: data
                });
            });
    };

    render() {
        return (
            <>
                <h2 className="list__title">Find you phone</h2>
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
        )
    }
}

export default PhoneList;