import React from "react";

export default function Post ({ name, photo, nickname, date, photo})  {
    return (
          <div className="post">
                    <div className="wrapper">
                        <img className="user-image" src={photo} alt="user" />
                        <div className="user-name">
                            {name}
                        </div>
                        <a className="user-nickname" href="#">{nickname}</a>
                        <span className="post-date">{date}</span>
                        <span className="post-content">{content}</span>
                    </div>
                    <img className="post-image" src={image} alt="Some post" />
                </div>
            );
        };
  

 
