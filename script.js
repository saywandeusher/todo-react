class List extends React.Component {
  constructor(props){
    super(props)
    this.changeHandler = this.changeHandler.bind( this );
    this.state = {
      list : [],
      word : ""
    }
  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
    
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };

    console.log(newItem);
  }

  render() {
      // render the list with a map() here
      console.log("rendering");
      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word} placeholder="enter task" ref={(a) => this._inputElement = a}/>
          <button type="submit">add item</button>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);