let data = [
  { id: 1, category: "Electronics", name: "Laptop" },
  { id: 2, category: "Electronics", name: "Smartphone" },
  { id: 3, category: "Furniture", name: "Chair" },
  { id: 4, category: "Furniture", name: "Table" },
  { id: 5, category: "Electronics", name: "Laptop" },
  { id: 6, category: "Clothing", name: "T-Shirt" },
];


//create data
function createItem(newItem) {
  data.push(newItem);
  console.log("Item added:", newItem);
}


//Read all item
function readAll() {
  console.log("All Data:", data);
}


//Read by id
function readById(id) {
  const item = data.find((item) => item.id === id);
  console.log(item ? "Item found:" : "Item not found", item);
}


//update data
function updateItem(id, updatedFields) {
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...updatedFields };
    console.log("Item updated:", data[index]);
  } else {
    console.log("Item not found.");
  }
}


//Delete data
function deleteItem(id) {
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    const deletedItem = data.splice(index, 1);
    console.log("Item deleted:", deletedItem);
  } else {
    console.log("Item not found.");
  }
}


//Filter data by category
function filterByCategory(category) {
  const filteredData = data.filter((item) => item.category === category);
  console.log("Filtered Data:", filteredData);
}


//Search by name
function searchByName(name) {
  const results = data.filter((item) => item.name === name);
  console.log("Search Results:", results);
}


//Partial match
function searchByPartialName(partialName) {
  const results = data.filter((item) =>
    item.name.toLowerCase().includes(partialName.toLowerCase())
  );
  console.log("Partial Search Results:", results);
}


//Get Distinct data
function getDistinctData() {
  const distinct = data.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.name === item.name || t.category === item.category)
  );
  console.log("Distinct Data:", distinct);
}


//Count item by category
function countByCategory() {
  const count = data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  console.log("Count by Category:", count);
}


//Sort data by name
function sortByName() {
  const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
  console.log("Sorted Data:", sorted);
}


//Group data by category
function groupByCategory() {
  const grouped = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  console.log("Grouped by Category:", grouped);
}


//   createItem({ id: 7, category: "Clothing", name: "Jeans" });
  // readAll();
//   readById(3); // Example: Get item with id=3
//   updateItem(4, { name: "Desk", category: "Office Supplies" }); // Example
//   deleteItem(7); // Example
//   filterByCategory("Electronics"); // Example
//   searchByName("Laptop");
//   searchByPartialName("lap");
  // getDistinctData();
  // countByCategory();
//   sortByName();
  groupByCategory();
