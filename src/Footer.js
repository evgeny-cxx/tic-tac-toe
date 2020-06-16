import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        let contacts = this.props.contacts;
        let title = this.props.title;

        return (
            <footer
                className="App section"
                style={{ background: "#2d3246" }}
            >
                <p >{title}</p>
                {/* <p className="d-flex bd-highlight"> Copyright by cxx_BY</p> */}
                <ul className="row d-flex">
                    {contacts.map((elem, index) => (
                        <li className="p-2 flex-fill bd-highlight" key={index}>{elem}</li>
                    ))}
                </ul>
            </footer>
        );
    }
}

export default Footer;
