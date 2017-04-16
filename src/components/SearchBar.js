import React from 'react'


class SearchBar extends React.Component { 
  constructor() {
    super();

  }
	submitSearch(e) { 
		alert('test')
		e.preventDefault();
		console.log("This is working!");
	}

	render() { 
		return (
			<form onSubmit={this.submitSearch}> 
				<input  type="text"/>
			</form>
		)
	}
}
// const SearchBar = () => (
// 	this.submit = () => 
// 	<input onSubmit={this.submit} type="search"/>
// )

export default SearchBar