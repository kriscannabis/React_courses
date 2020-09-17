import React from 'react'
import ReactDOM from 'react-dom'

class HomeWork extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            list: []
        }
    }

    addMessage(){
        // console.log('her')
        this.setState(state => ({
            // list: this.state.list + ['her']
            // this.state.myArray.push('new value')
            list: [...this.state.list, "her"]
          }));
    } 

    render(state){
        return(
            <>
                <div>
                    <ul>
                        {this.state.list.map((item) =>
                            <li>{ item }</li>
                        )}
                    </ul>
                </div>
                <button onClick={() => this.addMessage()}>her</button>
            </>
        )
    }
}

export default HomeWork 