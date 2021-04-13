import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../components/css/Header.css';


function Header(props) {
    const { counter } = props;

    return (
        <div className="header">
            <Navbar>
                <Navbar.Brand><b className="title-bold">Ron Swanson Quote Voter</b></Navbar.Brand>
                <Navbar.Brand><i className="title-italicized">"Vote for your favorite quote!"</i></Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search Favorite Quote" className="search" variant="light"/>
                    <Button className="search-button" type="submit">Get Quote</Button>
                </Form>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="total-votes">
                        Total Votes: { counter }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        counter: state
    }
}

export default connect(mapStateToProps)(Header);