import "./Card.css";

// sample wrapper component
function Card(props) {
  // be able to pass our className to the component
  const classes = 'card ' + props.className;

  // able to render our html content using props.children
  return <div className={classes}>{props.children}</div>
}

export default Card;