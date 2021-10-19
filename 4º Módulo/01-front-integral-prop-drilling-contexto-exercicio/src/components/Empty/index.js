import './styles.css';

function Empty(props) {
const {UsersIcon, message, iconSize} = props.value

  return (
    <div className="container-empty">
      <img
        src={UsersIcon}
        alt="icon"
        className="icon-empty"
        style={{ width: `${iconSize}px` }}
      />
      <strong>{message}</strong>
    </div>
  );
}

export default Empty;