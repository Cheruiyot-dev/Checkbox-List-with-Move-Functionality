import List from "./List";
import Controls from "./Controls";
import { useState } from "react";

interface DataItem {
  title: string;
  id: number;
  checked: boolean;
}

const data: DataItem[] = [
  { title: "First", id: 0, checked: false },
  { title: "Second", id: 1, checked: false },
  { title: "Third", id: 2, checked: false },
  { title: "Fourth", id: 3, checked: false },
];

const App: React.FC<DataItem> = () => {
  const [leftItems, setLeftItems] = useState<DataItem[]>(data);
  const [rightItems, setRightItems] = useState<DataItem[]>([]);
  const [toggledItems, setToggledItems] = useState<DataItem[]>([]);

  const handleToggle = (checkedItems: DataItem[]) => {
    const isToggledItems = checkedItems.filter((item) => item.checked);
    setToggledItems(isToggledItems);
    console.log(".....Updated toggled items state", toggledItems);
  };

  const moveRight = () => {
    const movedRightItems = [...rightItems, ...toggledItems];
    const remainingLeftItems = leftItems.filter((item) => !toggledItems.some((toggledItem) => toggledItem.id === item.id));

    setRightItems(movedRightItems);
    setLeftItems(remainingLeftItems);
    setToggledItems([]); // Reset toggledItems after moving items
  };

  const moveLeft = () => {
    const movedLeftItems = [
      ...leftItems,
      ...rightItems.filter((item) => item.checked),
    ];
    const remainingRightItems = rightItems.filter((item) => !movedLeftItems.some((movedItem) => movedItem.id === item.id));

    setLeftItems(movedLeftItems);
    setRightItems(remainingRightItems);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen ">
        <List items={leftItems} onChecking={handleToggle} />
        <Controls moveRight={moveRight} moveLeft={moveLeft} />
        <List items={rightItems} onChecking={handleToggle} />
      </div>
    </div>
  );
};

export default App;