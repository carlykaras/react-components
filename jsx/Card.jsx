import React from 'react';

class Card extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
            expanded: false,
            labelText: "Text here",
            sectionText: "This is a full section, with a lot of text to demonstrate that expanding the card will give you much more information."
      };
      this.click = this.click.bind(this);
    }

    click () {
        this.setState({ expanded: !this.state.expanded });
    }

    getClassNames (expanded) {
        return [
            "card",
            expanded ? "big":"small"
        ].join(" ");
    }

    render () {
        var imageurl = this.props.img,
            expanded = this.state.expanded;
        return (
            <div onClick={this.click} className={this.getClassNames(expanded)}>
                <img src={imageurl} />
                <section>{this.state.labelText}</section>
                <section className="extra">{this.state.sectionText}</section>
            </div>
        );
    }
}

export default Card;
