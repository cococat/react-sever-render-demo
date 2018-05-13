import React, {Component} from 'react';
import ReactDom from'react-dom';

class Hello extends Component {

    
    componentDidMount(){
         console.log(location.href);
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


ReactDom.render(<Hello />, document.getElementById('root'));

  
