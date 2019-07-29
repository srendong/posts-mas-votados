import React from "react";

const Post = ({ post, counterPlus, counterLess }) => {
  return (
    <div className="col-12 post  ">
      <div className="row">
        <div className="col-12 col-lg-3 imagen">
          <img src={post.post_image_url} alt="post" />
        </div>
        <div className="col-12 col-lg-9 contenido  ">
          <div>
            <a href={post.url} rel="noopener noreferrer" target="_blank">
              {post.title}
            </a>
          </div>
          <p>{post.description}</p>
          <div className="row col-12   autorVotos  ">
            <div className="row col-12 col-md-8 autor">
              <h2>Escrito por:</h2>
              <img src={post.writer_avatar_url} alt="autor" />
            </div>
            <div className="row col-12 col-md-4 votos">
              <i className="fa fa-minus-circle" onClick={counterLess} />
              <p className="">{post.votes}</p>
              <i className="fa fa-plus-circle" onClick={counterPlus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

// <div className="post ">
//     <div className="imagen">
//         <img src={post.post_image_url} alt="post"/>
//     </div>
//     <div className="contenido ">
//         <div><a href={post.url} rel="noopener noreferrer" target="_blank">{post.title}</a></div>
//         <p>{post.description}</p>
//         <div className="autorVotos">
//             <div className="autor">
//                 <h2>Escrito por:</h2>
//                 <img src={post.writer_avatar_url} alt="autor"/>
//             </div>
//             <div className="votos border">
//                 <i className="fa fa-plus-circle" onClick={counterPlus}></i>
//                 <p>{post.votes}</p>
//                 <i className="fa fa-minus-circle" onClick={counterLess}></i>
//             </div>
//         </div>
//     </div>
// </div>
