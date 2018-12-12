var data=require('data');
var testData=require('./test/test.js')
var React=require('react');
var ReactDOM=require('react-dom')

ReactDOM.render(
    <h1>{data}<p>{testData.value}</p></h1>,
    $('#app')[0]
)