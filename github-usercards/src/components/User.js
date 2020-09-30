import React from 'react';

function DisplayUser(props) {
    let {login,name,location,html_url,following,followers,bio,avatar_url} = props.user

    return (     
        <>
    <div className="maincard">
    <h2> Hello {name}</h2> <br>
    </br><img width="200px" src={avatar_url} />
    <div className="userinfo">
    <div>Followers: {followers}</div>
    <div>Following: {following}</div>
    <div>Bio: {bio}</div>
    Located in {location}.
    </div>
    </div>
  
    <div>
    <h2>Here are your followers!</h2>
    </div>
    </>
    )
   
  }

export default DisplayUser;