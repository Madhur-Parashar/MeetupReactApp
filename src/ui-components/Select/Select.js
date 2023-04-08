import "./Select.css"

function Select(props) {
  let options = props.options.map((item) => (
    <option key={item} value={item}>{`${item.charAt(0).toUpperCase()}${item.slice(1)}`}</option>
  ));
  return (
    <div className={`Select ${props.className}`}>
      <label>
        {props.label}
        <select name={props.label} value={props.value} onChange={props.onChangeSelect}>
          {options}
        </select>
      </label>
    </div>
  );
}

export default Select;
