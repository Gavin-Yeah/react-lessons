#### life cycle
1. constructor()
2. static getDerivedStateFromProps()
3.  render()
4.  componentDidMount()
#### props or state changes will triggers updates
1.  static getDerivedStateFromProps()
2.  shouldComponentUpdate()
3.  render()
4.  getSnapshotBeforeUpdate()
5.  componentDidUpdate()

componentWillUnmount()




###add shouldComponentUpdate or change Component to PureComponent to avoid multi render
