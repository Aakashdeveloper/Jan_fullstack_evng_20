import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';

const App = () => {
    return(
        <React.Fragment>
            <Header/>
            <h1>Hii To React</h1>
            <h2>This is heading</h2>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
