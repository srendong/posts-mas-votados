import React from 'react';

const Post = ({post, counterPlus, counterLess}) => {
    return ( 
        <div className="post border">
            <div className="imagen">
                <img src={post.post_image_url} alt="post"/>
            </div>
            <div className="contenido ">
                <a href={post.url} rel="noopener noreferrer" target="_blank">{post.title}</a>
                <p>{post.description}</p>
                <div className="autorVotos">
                    <div className="autor">
                        <h2>Escrito por:</h2>
                        <img src={post.writer_avatar_url} alt="autor"/>
                    </div>
                    <div className="votos">
                        <p>{post.votes}</p>
                        <button onClick={counterPlus}>+</button>
                        <button onClick={counterLess}>-</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Post;