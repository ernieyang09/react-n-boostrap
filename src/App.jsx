import React from 'react';
import {
    Header,
    Jumbortron,
    Main,
    Footer,
} from './components';

class App extends React.Component {
    render() {
        return (
          <div>
            <Header />
            <Jumbortron />
            <Main />
            <Footer />
          </div>
        )
    }
}


export default App;