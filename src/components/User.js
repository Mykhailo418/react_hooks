import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {UserContext} from './App'

const User = () => {
	const userInfo = useContext(UserContext);

    return (
      <div className="container">
        <h2>User Info</h2>
        {outputUserInfo()}
      </div>
    );

    function outputUserInfo(){
    	if(!userInfo) return;
    	const list = Object.keys(userInfo).map(key => <li key={key}><strong>{key}: </strong>{userInfo[key]}</li>);
    	return <ul>{list}</ul>;
    }
}

export default User;
