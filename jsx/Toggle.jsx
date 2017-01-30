import React from 'react';

class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
        };
        this.click = this.click.bind(this);
    }

    click() {
        this.setState({ toggled: !this.state.toggled});
    }

    getToggleFG (toggled) {
        return [
            "toggle",
            toggled ? "on":"off",
        ].join(" ");
    }

    getToggleBG (toggled) {
        return [
            toggled ? "night":"day"
        ].join(" ");
    }

    render() {
        var toggled = this.state.toggled;
        var timeday = this.state.toggled ? 'Day':'Night';
        //var className = this.state.toggled ? this.state.classB:this.state.classA;

        return (
            <div onClick={this.click} className={this.getToggleBG(toggled)}>
                <div className={this.getToggleFG(toggled)}>
                    <p>{timeday}</p>
                </div>
            </div>
        );
    }
}

export default Toggle;
