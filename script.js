class List extends React.Component {
  constructor(props){
    super(props)
    this.changeHandler = this.changeHandler.bind(this);
    this.handleClick = this.handleClick.bind( this );
    this.state = {
      list : [],
      word : ""
    }
  }

  changeHandler(event){
    // if (event.target.value.length < 1 ) {
    // this.state.enterSmth = 'Enter something';
    // } else {
    //   this.state.enterSmth = "";
    // }
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
  }

  handleClick(){
    let task = this.state.word;
    if (task.length < 1) {
      alert("Please enter a task!");
    } else {
      this.state.list.push(task);
      console.log(this.state.list);
      let currentList = this.state.list;
      this.setState({list:currentList})
    }
  }

  render() {
      // render the list with a map() here
      let renderedList = this.state.list.map( (item, index) => {
                        return <li key={index}>{item}</li>
      })
      console.log(renderedList);
      console.log("rendering");
      return (
        <div className="list">
        <form onSubmit={this.handleClick}>
          <input onChange={this.changeHandler} value={this.state.word} placeholder="enter task" />
          <button type="submit">add item</button>
          </form>
          <div>{renderedList}</div>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);