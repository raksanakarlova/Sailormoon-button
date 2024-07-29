import { Component } from "react";
import './button.css';
import day from '../pictures/day.png';
import night from '../pictures/night.png';

class Button extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    onHandleToggle = () => {
        this.setState((state) => ({
            isChecked: !state.isChecked
        }))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isChecked !== this.state.isChecked) {
            document.body.style.backgroundColor = this.state.isChecked ? '#694F8E' : '#fff';
            document.body.style.transition = this.state.isChecked ? '2s ease' : '2s ease';
        }
    }

    render() {
        const {isChecked} = this.state

        return (
            <div className='toggle'>

                <div className='images-container'>
                    <img className={`picture ${isChecked ? 'fade-out' : 'fade-in'}`} src={day} alt='day'></img>
                    <img className={`picture ${isChecked ? 'fade-in' : 'fade-out'}`} src={night} alt='night'></img>
                </div>

                <div className='toggle-btn-container'>
                    <input
                        id='toggle'
                        type='checkbox'
                        className='toggle-checkbox'
                        checked={isChecked}
                        onChange={this.onHandleToggle}
                    />

                    <label className='toggle-label' htmlFor='toggle'>
                        <span className='toggle-inner'></span>
                    </label>
                </div>
            </div>
        )
    }

}

export default Button;