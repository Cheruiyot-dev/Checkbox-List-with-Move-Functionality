import Item from "./Item";

interface DataItem {
  title: string;
  id: number;
  checked: boolean;
}

interface ListProps {
  items : DataItem[];
  onChecking: (data: DataItem[]) => void;
}
interface ItemWithKeyProps extends DataItem {
  key: number;
}


const List: React.FC <ListProps>= ({items, onChecking}) => {
  const handleItemToggle = (checkedItem: DataItem) => {
    const checkedItems = items.map((item) => item.id === checkedItem.id ? checkedItem : item);
    onChecking(checkedItems)
  }
  return (
    <div className="flex flex-col justify-center items-start h-56 w-40 border border-2 rounded-lg border-black">
      {items.map((item, index) => (
        <Item key={index} {...item} onToggle  = {handleItemToggle} />
      ))}
        
    </div>
  );
};

export default List;
