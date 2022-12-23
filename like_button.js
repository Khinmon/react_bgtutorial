'use strict';

const e = React.createElement;

class List extends React.Component{
  render(){
    const _items = this.props.rows || []
    const items = _items.map((value, index) => {
      return(<li key={index}>
        <button onClick={()=>this.props.onDelete(index)}>Delete</button>value:{value}, index: {index}</li>
      )
    })
    return(
      <ul>
        {items}
      </ul>
    )
    return items
  }
}

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = { count: 0, items: ['a', 'b']};
    this.handlePlusClick = this.handlePlusClick.bind(this)
    this.handleMinusClick = this.handleMinusClick.bind(this)
    this.handleOnItemDelete = this.handleOnItemDelete.bind(this)
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  handlePlusClick(){

    // this.state.count = this.state.count +1
    // this.setState({
    //   count: this.state.count
    //  })
    const items = this.state.items
    items.push(Date.now())
    this.setState({
      items: items,
      count: this.state.count +1
     })

  }

  handleMinusClick(){
    const items = this.state.items
    items.splice(-1)
    this.setState({
      items: items,
      count: this.state.count - 1
     })
  }

  // createItems(){
  //   const items = this.state.items.map((value, index) => {
  //     return(<li key={index}>
  //       value:{value}, index: {index}</li>
  //     )
  //   })
  //   return items
  // }

  handleOnItemDelete(index){
    console.log('ondelete', index);
    // this.state.items.splice(index, 1)
    this.setState((state)=>{
      state.items.splice(index, 1)
      return {
        items: state.items
      }
    })
  }

  render (){
    console.log('render');
    return(
      <div>
        <h1>Counter</h1>
        <button onClick={this.handlePlusClick}>Plus</button>
        <button onClick={this.handleMinusClick}>Minus</button>
        <h3>this.state.count</h3>
        <List rows={this.state.items} onDelete={this.handleOnItemDelete}/>

      </div>
    )
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, checked: false };
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
  }

  handleButtonClick(){
    this.setState({ liked: true })
  }

  handleCheckChange(){
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    // Display a "Like" <button>
    return (
      <div>
        <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckChange}/>
        this.state.checked: {this.state.checked + ''}
        {this.state.checked && <Counter/>}
        <div>
          <button onClick={this.handleButtonClick}>
            Like
          </button>
        </div>
      </div>
    );

    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );
  }
}

const domContainer = document.querySelector('.like_button_container');
ReactDOM.render(e(LikeButton), domContainer);