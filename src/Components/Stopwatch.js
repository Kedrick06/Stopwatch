import React, { Component } from "react";



class Stopwatch extends Component {
    /* Setting the state*/
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };
    /* Setting the Stopwatch timer to turn on */
    beginTimer = () => {

        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };
    /* Setting the Stopwatch timer to stop */
    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };
    /* Setting the Stopwatch timer to turn on */
    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };
    render() {

    /*Rendering the display and calculating */

        const { timerTime } = this.state;
        
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);


        return (
            <div className="Stopwatch">
                <div className="display">
                    
                {hours} : {minutes} : {seconds}
                <br></br>
                    {this.state.timerOn === false && this.state.timerTime === 0 && (
                        <button className="button" onClick={this.beginTimer}>Start</button>
                    )}
                <br></br>
                    {this.state.timerOn === true && (
                        <button className="button" onClick={this.stopTimer}>Stop</button>
                    )}
                <br></br>
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                        <button className="button" onClick={this.beginTimer}>Continue</button>
                    )}
                <br></br>
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                        <button className="button" onClick={this.resetTimer}>Reset</button>
                    )}
                </div>
            </div>
        );
    }
}
export default Stopwatch;