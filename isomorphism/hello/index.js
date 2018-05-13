import React, {Component} from 'react';
import ReactDom from'react-dom';
import ReactDOMServer from'react-dom/server';
const isClient = typeof window !== 'undefined';
class Hello extends Component {

    
    componentDidMount(){
         console.log(window.location.href);
    }
    render() {
        return (
            <div className>
                <h2>Demo</h2>
                <button onClick={()=>alert('hello world')}>click me</button>
            </div>
        );
    }
};

let htmlStr = '';
if (isClient) {
    ReactDom.hydrate(<Hello />, document.getElementById('root'));
} else {
    htmlStr = ReactDOMServer.renderToString(<div className="sever"><Hello/></div>);
}
  
module.exports = htmlStr;