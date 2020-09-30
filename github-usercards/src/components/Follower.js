import React from 'react';


function Follower (props)  {
    let {login,avatar_url} = props.follower  

        return(
        <div className="follower">
            <h2>{login} Follows you</h2> 
            <img width="200px" src={avatar_url} />
         <br></br>
         </div>
            
        );
}

export default Follower;