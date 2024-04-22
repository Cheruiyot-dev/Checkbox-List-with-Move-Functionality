import { useState, ChangeEvent } from "react";

interface DataItem {
  title: string;
  id: number;
  checked: boolean;
}

interface ItemProps extends DataItem {
  onToggle: (item: DataItem) => void;
}

const Item: React.FC<ItemProps> = ({ title, id, checked, onToggle }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedItem: DataItem = {
      title,
      id,
      checked: e.target.checked,
    };
    setIsChecked(e.target.checked);
    console.log("checked item:", e.target.checked);

    onToggle(checkedItem);
    console.log("checked item........:", checkedItem);
  };
  return (
    <div className="flex  items-center mb-2 ml-4">
      <div className="w-6 h-6">
      <label className="flex items-center">
        <input type="checkbox" checked={isChecked} onChange={handleCheck} 
        className=" form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out"/>
        <span className=" ml-2 text-gray-700">{title}</span>
      </label>
      </div>
      
    </div>
  );
};

export default Item;
