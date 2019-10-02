import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Users:</h3>
        {this.props.list.map(user => {
          return (
            <NavLink
              to={`/users/${user.id}`}
              key={user.id}
              activeClassName="saved-active"
            >
              <span className="saved-user">{user.name}</span>
            </NavLink>
          );
        })}
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}