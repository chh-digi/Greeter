import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as GreeterActions from './greeterActions';
import GreeterStore from './greeterStore';
import Dispatcher from './dispatcher';

interface IProps {
    lead: string,
    message: string
}

interface IState {
    tempInputValue: string,
    toBeGreeted: string
}

class Greeter extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = { toBeGreeted: "", tempInputValue: "" }
    }

    changeToBeGreeted(toBeGreeted: string) {
        GreeterActions.changeToBeGreeted(toBeGreeted);
    }

    componentWillMount() {
        GreeterStore.on("TO_BE_GREETED_CHANGED", () => {
            this.setState({
                toBeGreeted: GreeterStore.toBeGreeted
            })
        })

        Dispatcher.dispatch(new GreeterActions.GreeterAction("CHANGE_TO_BE_GREETED", "Christoffer"));
    }
    
    render() {
        return <div>
                    <h1>{this.props.lead}</h1>
                    <hr />
                    <br />
                    <button onClick={ (e:React.MouseEvent<HTMLButtonElement>) => { this.changeToBeGreeted(this.state.tempInputValue) } }>Greet!</button>
                    <input type="textbox" onChange={(e:React.ChangeEvent<HTMLInputElement>) => { this.setState({ tempInputValue: e.target.value }) } } />
                    <h3>{this.props.message.replace("{0}", this.state.toBeGreeted )}</h3>
               </div>;
    }
}

ReactDOM.render(<Greeter lead={"Greetings!"} message="Welcome {0} :)" />, document.getElementById('root'));