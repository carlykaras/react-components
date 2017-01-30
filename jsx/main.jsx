import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import Toggle from './Toggle.jsx'

ReactDOM.render(
    <div>
        <Card img="https://placeholdit.imgix.net/~text?txtsize=40&txt=250%C3%97150&w=250&h=150"/>
        <Toggle/>
    </div>,
    document.getElementById("container")
);
