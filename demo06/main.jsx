var React = require('react');
var ReactDOM = require('react-dom');
var style = require('./app.css');

ReactDOM.render(
    <div>
        <h1 className={style.h1}>Hello World inner</h1>
        <h2 className="h2">Hello Webpack inner</h2>
    </div>,
    document.getElementById('example')
);