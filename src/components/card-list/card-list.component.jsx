import {Component} from 'react';

class CardList extends Component {
    render(){
        console.log(this.props);
        return (
        <div><h1>hello i'm the cardlist component</h1></div>
        )
    }
}
export default CardList;