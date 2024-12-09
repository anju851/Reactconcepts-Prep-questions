// Buggy code: Fix The Bug To Enable Btn To Add Items To List
import React, { useState } from "react";

// const BugFix1 = () => {
//   const [items, setItems] = useState([{ id: 1, value: "Item 1" }]);

//   const addItem = () => {
//     items.push({ id: items.length + 1, value: `Item ${items.length + 1}` });
//     setItems(items);
//   };

//   return (
//     <div>
//       <h1>Items:</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.value}</li>
//         ))}
//       </ul>
//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// };

// export default BugFix1;

// Fix

const BugFix1 = () => {
  const [items, setItems] = useState([{ id: 1, value: "Item 1" }]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, value: `Item ${items.length + 1}` },
    ]);
  };

  return (
    <div>
      <h1>Items:</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default BugFix1;
