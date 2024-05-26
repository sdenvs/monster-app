import React, { Component } from 'react'

// export default class CardList extends Component {
//   render() {
//     const { name } = this.props
//     return (
//       <div className='d-flex flex-column align-items-center border border-dark m-3 p-3' style={{ width: "20%", height: "200px" }} >
//         <div style={{ width: "100px", height: "100px" }} className='bg-secondary rounded-circle d-flex flex-column justify-content-center align-items-center'>
//           <h1>{name[0].toUpperCase()}</h1>
//         </div>
//         <div>
//           <h3 className='text-primary'>{name}</h3>
//         </div>
//       </div>
//     )
//   }
// }



function cardList({ name }) {
  return (
    <div className='d-flex flex-column align-items-center border border-dark m-3 p-3' style={{ width: "20%", height: "200px" }} >
      <div style={{ width: "100px", height: "100px" }} className='bg-secondary rounded-circle d-flex flex-column justify-content-center align-items-center'>
        <h1>{name[0].toUpperCase()}</h1>
      </div>
      <div>
        <h3 className='text-primary'>{name}</h3>
      </div>
    </div>
  )
}

export default cardList