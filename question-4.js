// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let lowerItem = inventory[0];

for (let i of inventory) {
  if (i.quantity < lowerItem.quantity) {
    lowerItem = i ;
  }
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lowerItem.name} ซึ่งมี ${lowerItem.quantity} ชิ้น`);
