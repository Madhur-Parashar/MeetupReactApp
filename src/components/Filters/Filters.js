import Select from "../../ui-components/Select/Select";
import "./Filters.css"
function Filters(props) {
  return (
    <div className="Filters">
      <Select
        options={props.categoryList}
        label="Category"
        value={props.selectedCategory}
        onChangeSelect={props.onChangeCategory}
      />
       <Select
        className="pl16"
        options={props.statusList}
        label="Status"
        value={props.selectedStatus}
        onChangeSelect={props.onChangeStatus}
      />
    </div>
  );
}

export default Filters;
