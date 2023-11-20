console.log('start =======');

console.log('start')

class myButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openStatus: false
    }
  }
  statusChange = ()=> {
    this.setState({
      openStatus: !this.state.openStatus
    })
  }
  render () {
    return (
      <div className="root">
        <div>{ this.state.openStatus ? '打开状态' : '关闭状态' }</div>
        <button 
          onClick={ this.statusChange }
        >{ this.state.openStatus ? '关闭' : '打开' }</button>
      </div>
    );


    return root
  }
}

ReactDOM.createRoot(document.getElementById('app')).render(React.createElement(myButton))
