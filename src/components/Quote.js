import React, { useState } from 'react';
import {increment, decrement} from '../redux/actions';
import { connect } from 'react-redux';
import '../components/css/Quote.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import thumbsup from "../images/thumbs-up.png";
import thumbsdown from '../images/dislike.png';

//Create a class component to create state to store the data
function Quote(props) {
    const { increment, decrement, data, key} = props;

    const [state, setData] = useState({
            count: 0,
            total: 0,
    });
    
//Use the increment function to set state
    const incrementMe = (dispatch) => {
        setData({
            count: state.count + 1 
        });
        increment();
    }
    const decrementMe = () => {
        setData({
            count: state.count - 1
        })
        decrement();
    }

        return (
            <div key={key}>
                <div className="row">
                    <button data-testid="increment-button" onClick={incrementMe}> 
                    <img className="icon" src={thumbsup} alt="Thumbs up"/></button>&nbsp;
                    <span className="count">{state.count}</span>&nbsp;
                    <button data-testid="decrement-button" onClick={decrementMe}><img className="icon" src={thumbsdown} alt="Thumbs down"/> </button>&nbsp;
                    <span className='quote-data'>{data}</span>
                </div>
            </div>
        )
}

function mapStateToProps(state) {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()), 
        decrement: () => dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);

