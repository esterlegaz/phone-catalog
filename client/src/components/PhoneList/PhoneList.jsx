import React from "react";
import { connect } from 'react-redux';
import "./PhoneList.scss";
import PhoneItem from './../PhoneItem/PhoneItem';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { startLoading, stopLoading } from './../../store/global/globalActions';
import TextField from "@material-ui/core/TextField";

class PhoneList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: [],
            searchTerm: ''
        };
    }

    componentDidMount() {
        this.listMenuItems();
    }

    listMenuItems = () => {
        this.props.startLoading();
        fetch('/phones')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    phones: data
                });
            })
            .finally(() => {
                this.props.stopLoading();
            });
    };

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    filterPhones() {
        let filteredPhones = [];
        if (this.state.searchTerm) {
            filteredPhones = this.state.phones.filter(phone => {
                return (
                    phone.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())
                );
            }).length !== 0
        }

        filteredPhones.map((phone, index) => {
            return <PhoneItem
                key={index}
                id={"phone-" + phone.id.toString()}
                information={phone}
            />
        })


    }

    filterPhones = () => {
        const { phones, searchTerm } = this.state;
        return phones.filter(book => {
            const title = book.name.toUpperCase().includes(searchTerm.toUpperCase());
            return title;
        })
    }

    render() {
        return (
            !this.props.isLoading &&
            <>
                <div className="list__search">
                    <TextField onKeyUp={this.handleChange} id="search" label="Search your phone" type="search" />
                </div>

                <div className="form__hint">
                    <p>Do you want to add a new phone?</p>
                    <Link to="/form">
                        <Button variant="outlined" size="large">Click here</Button>
                    </Link>
                </div>

                {this.filterPhones() && this.filterPhones().length > 0
                    ? (
                        <>
                            <ul className="list__container">
                                {this.filterPhones().map((phone, index) => {
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
                    )
                    :
                    <p className="list__empty">
                        No results found. Please, try again.
                    </p>

                }

            </>
        )
    }
}

const mapStateToProps = (state) => {
    const isLoading = state.global.isLoading;

    return {
        isLoading
    };
};


const mapDispatchToProps = {
    startLoading,
    stopLoading
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneList);
