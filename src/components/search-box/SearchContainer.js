import React, { Component } from 'react'

// export default class SearchContainer extends Component {
//     render() {
//         const { onSearch } = this.props;
//         return (
//             <div>
//                 <input type='search' placeholder='type to search' onChange={onSearch} />
//             </div>
//         )
//     }
// }



function SearchContainer({ onSearch }) {
    return (
        <div>
            <input type='search' placeholder='type to search' onChange={onSearch} />
        </div>
    )
}

export default SearchContainer