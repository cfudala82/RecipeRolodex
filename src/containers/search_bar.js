import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { orange500 } from 'material-ui/styles/colors';
import ActionSearch from 'material-ui/svg-icons/action/search';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  underlineStyle: {
    borderColor: orange500
  }
};


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  submitForm(event){
    console.log(this.state);
    event.preventDefault();

    // search api
  }

  render() {
    //console.log(this.props);
    return (
      <form onSubmit={(e) => this.submitForm(e)} style={{position:'relative', display: 'inline-block', margin: 30, left: 40, top: 10}}>
        <ActionSearch
          style={{position: 'absolute', left: 0, top: 15, width: 20, height: 20}}
        />
        <TextField
          style={{textIndent: 30, width: '250%'}}
          hintText="Search for a Recipe"
          underlineStyle={styles.underlineStyle}
          fullWidth={false}
          value={this.state.term}
          onChange={(e) => this.onInputChange(e)}
        />
        <RaisedButton
          label="Submit"
          primary={true}
          style={{position: 'absolute', left: 500, top: 5}}
          value={this.state.term}
          type="submit"
        />
      </form>
    );
  }
}

export default SearchBar;
