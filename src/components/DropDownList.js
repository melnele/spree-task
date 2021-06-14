import './DropDownList.css';

function DropDownList({ listName, label, list,onChange }) {
    return (
        <div className="dropdown-list">
            <label htmlFor={listName}>{label + ":"}</label>

            <select name={listName} id={listName} onChange={(e)=>{onChange(e.target.value)}}>
                {list.map(item =>
                    <option key={item.value} value={item.value}>{item.name}</option>
                )}
            </select>
        </div>
    );
}

export default DropDownList;
