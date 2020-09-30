import React from 'react';


function Follower (props)  {
    let {login,avatar_url,html_url} = props.follower  

        return(
        <div className="follower">
            <div className="followercard">
            <h2>{login} Follows you</h2> 
           
            < a href =  {html_url}><img width="200px" src={avatar_url} /> </a>
            

      
         </div>
         </div>
            
        );
}

export default Follower;