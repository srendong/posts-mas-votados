import React from 'react';

const Post = ({post, counterPlus, counterLess}) => {
    return ( 
        <div className="post border">
            <a href={post.url} rel="noopener noreferrer" target="_blank">{post.title}</a>
            <p>{post.description}</p>
            <div>
                <h2>{post.votes}</h2>
                <button onClick={counterPlus}>+</button>
                <button onClick={counterLess}>-</button>
            </div>
        </div>
     );
}
 
export default Post;