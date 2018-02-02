import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipe } from '../actions/index';
import { ROOT_URL } from '../actions';

import RecipeSvg from '../images/cookie_recipe.jpg';

import database, {User} from '../components/fsociety';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Divider from 'material-ui/Divider';
import { orange50 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {orange500, blue500} from 'material-ui/styles/colors';

import axios from 'axios';

class SaveRecipe extends  Component {
  constructor(props) {
    super(props);

    this.rid = encodeURIComponent('http://www.edamam.com/ontologies/edamam.owl#' + props.match.params.id);

    this.state = {
      open: false,
    };

    this.state = {img: null};
    this.get_recipe();
  }

  imgClick(RecipeURL) {
    console.log(RecipeURL);
    window.location.href = RecipeURL;
  }

  get_recipe() {
    const url = `${ROOT_URL}&r=${this.rid}`;
    axios.get(url)
      .then((response) => {
        this.setState({img: response.data[0].image, ingredients: response.data[0].ingredients,
        url: response.data[0].url,
        label: response.data[0].label,
        source: response.data[0].source});
      });
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

save () {
  database().ref('recipes/' + User.user.uid).push(
    {url: 'dhsfjsdhfj', notes: []}
  );

  // database().ref('/recipes/' + User.user.uid).once('value')
  //   .then(function(result) {
  //     var recipes = result.val();
  //      send redux action
  //   });
}

renderField(field) {
  return (
    <div className="form-group">
      <label>{field.label}</label>
      <input
        className="form-control"
        type="text"
        {...field.input}
      />
    </div>
  );
}


recipe_list () {
  const initialRecipe = this.state.ingredients;

if (this.state.ingredients) {
    return this.state.ingredients.map((r) => {
      return (
        <ListItem primaryText={r.text}  leftIcon={<ContentInbox />} />
      )
    });
  }
}

  render() {
    return(
      <div>
        <Paper
          zDepth={5}
          style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20, maxWidth: 350, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20}}
        >

            <GridTile
              style={{ }}
              key={this.state.url}
              title={this.state.label}
              subtitle={<span>from <b>{this.state.source}</b></span>}
              onClick={() => this.imgClick(this.state.url)}
            >
              <img
                src={this.state.img}
                alt={this.state.label}
                width="350"
              />
            </GridTile>

        </Paper>
        <Card
          zDepth={5}
          style={{display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 30,
          maxWidth: 500,
          height: 350,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 175,
          backgroundColor: orange50,
          }}
        >
           <Divider />
          <Subheader
            style={{color: '#EF6C00',
              fontSize: 20,
              margin: 30
            }}
          >
            Save your recipe
          </Subheader>
          <RaisedButton
            style={{ color: '#EF6C00'}}
            onClick={this.handleClick}
            label="Ingredients List"
          /><br/>
          <TextField
            hintText="Notes"
            hintStyle={{ color: '#EF6C00' }}
            multiLine={true}
            rows={1}
            rowsMax={8}
            style={{ color: '#EF6C00',
            margin:10}}
          /><br />

          <Popover
            zDepth={5}
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            onRequestClose={this.handleRequestClose}
          >
            <List>
              {this.recipe_list()}
            </List>
        </Popover>

      </Card>
      </div>
    );

  }
}

function mapStateToProps({recipe_list}) {
  return {recipe_list};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveRecipe);
