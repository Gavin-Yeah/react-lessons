##  use prop-types
*   npm install --save prop-types
```
    import PropTypes from 'prop-types'
    
    
    
    TodoHeader.propTypes = {
    title: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
}
```
*   in function , we should include the function name
*   in class, we could add static propTypes in that class 
```
    static propTypes = {
        btnText:PropTypes.string
    }
```

#### add default into static defaultProps
```
    static defaultProps = {
        btnText: 'add todo'
    }
```

#### add innerhtml into the state
```
 <div dangerouslySetInnerHTML={{__html:this.state.article}}/>
```

####   when pass attributes to the item,we can use   {...todo}


### use destruction to make variable shorter like

```
 const{
            isCompleted,
            title
        } = this.props;

```

### use noop (empty function) to avoid null function (if that function is not defined)
