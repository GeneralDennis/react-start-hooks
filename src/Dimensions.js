import React, { Component, useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({width: null, height: null});

  const { width, height } = dimensions;
  useEffect(() => {
    const { innerWidth, innerHeight} = window;
    setDimensions({width: innerWidth, height: innerHeight});
    const handleResize = e => {
      const { innerHeight, innerWidth } = e.target;
      setDimensions({width: innerWidth, height: innerHeight});
    }
    window.addEventListener('resize', handleResize);

    return () => {
      debugger
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return(
    <div>Dimensions:&nbsp;
      {`${width}px - ${height}px`}
    </div>
  )
}

// class Dimensions extends Component {
//   state = {
//     width: null,
//     height: null
//   }
//   componentDidMount(){
//     window.addEventListener('resize', this.onResize)

//     const { innerWidth, innerHeight} = window
//     this.setDimensions(innerWidth, innerHeight);
//   }

//   componentWillUnmount(){
//     window.removeEventListener('resize', this.onResize)
//   }

//   onResize = e => {
//     const { innerHeight, innerWidth } = e.target;
//     this.setDimensions(innerWidth, innerHeight);
//   }
//   setDimensions = (width, height) => {
//     this.setState({
//       width,
//       height,
//     })
//     document.title = `${width}px x ${height}px`
//   }
//   render(){
//     return(
//       <div>Dimensions:&nbsp;
//         {`${this.state.width}px - ${this.state.height}px`}
//       </div>
//     )
//   }
// }

export default Dimensions
