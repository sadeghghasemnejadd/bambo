function Comment(props) {
    return (
        <div className="comment">
          <h3>{props.author}</h3>
          <p>{props.text}</p>
        </div>
    );
}

export default Comment;