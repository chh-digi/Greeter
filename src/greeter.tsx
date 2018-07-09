import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {
    lead: string,
    message: string
}

interface IState {
    tempInputValue: string,
    toBeGreeted: string
}

class Greeter extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = { toBeGreeted: "Christoffer", tempInputValue: "" }
    }
    
    render() {
        return <div>
                    <h1>{this.props.lead}</h1>
                    <hr />
                    <br />
                    <input type="button" value="Greet!" onClick={ (e:any) => { this.setState({ toBeGreeted: this.state.tempInputValue }) } }/>
                    <input type="textbox" onChange={ (e:React.ChangeEvent<HTMLInputElement>) => { this.setState({ tempInputValue: e.target.value }) } } />
                    <h3>{this.props.message.replace("{0}", this.state.toBeGreeted )}</h3>
               </div>;
    }
}

ReactDOM.render(<Greeter lead={"Greetings!"} message="Welcome {0} :)" />, document.getElementById('root'));