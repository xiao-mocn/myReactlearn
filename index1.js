console.log('start')

class myButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openStatus: false
    }
  }

  render () {
    const pnode = React.createElement(
      'div',
      {
        className: 'status',
        key: 1
      },
      this.state.openStatus ? '打开状态' : '关闭状态'
    )
    const bnt = React.createElement(
      'button',
      {
        className: 'button',
        key: 2,
        onClick: () => {
          this.setState({
            openStatus: !this.state.openStatus
          })
        }
      },
      this.state.openStatus ? '关闭' : '打开'
    )
    const root = React.createElement(
      'div',
      {
        className: 'root',
      },
      [pnode, bnt]
    )


    return root
  }
}

ReactDOM.createRoot(document.getElementById('app')).render(React.createElement(myButton))
