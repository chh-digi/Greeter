import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IState {
    message: string
}

class Greeter extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);

        this.state = { message: "Hello Christoffer! :)" }

        console.log("I am alive...");
    }
    
    render() {
        return <div><input type='button' value="change" onClick={(e:any) => {this.setState({message: "Hello Hessam"})}}/><h1>{this.state.message}</h1></div>;
    }
}

ReactDOM.render(<Greeter />, document.getElementById('root'));