export const Button = (props) => {
  let mystyle = {
    backgroundColor: props.colour,
    width: "200px",
    height: "40px",
    borderRadius: "8px",
    color: "#fff",
  };

  return (
    <button style={mystyle} onClick={props.handleEvent}>
      Click to change colour
    </button>
  );
};
