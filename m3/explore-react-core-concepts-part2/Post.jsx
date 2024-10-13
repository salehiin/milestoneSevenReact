

function Post({post}){
    const {title, id, userId, body} = post;
    return(
        <div className="box p-6" style="padding: 10px">
            <h5>Title: {title}</h5>
            <p><small>UserId: {userId}</small></p>
            <p><small>postId: {id}</small></p>
            <p>Description{body}</p>
        </div>
    )
};

export default Post;