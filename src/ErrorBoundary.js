import React from 'react'

//this is modified from here : https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
class ErrorBoundary extends React.Component{
  constructor (props){
  super(props);
  this.state={ hasError: false };
}


componentDidCatch(error, info){
  this.setState({hasError: true});
}

render(){
  if (this.state.hasError){
    alert(this.state.sbooks)
    return <h1>Something went wrong.</h1>;
  }
  return this.props.children;
  }
}

export default ErrorBoundary
