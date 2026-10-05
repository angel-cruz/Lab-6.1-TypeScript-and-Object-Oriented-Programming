import { Product } from "./models/Product";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";
import { sortByPrice, sortByName } from "./utils/productSorter";

const laptop = new PhysicalProduct("P001", "Laptop", 1000, 2.5, 12);
const desk = new PhysicalProduct("P002", "Gaming Desk", 500, 25, 2);
const ebook = new DigitalProduct("D001", "TypeScript Guide", 30, 50);

const products: Product[] = [laptop, desk, ebook];

console.log("INVENTORY");

for (const product of products) {
    console.log(product.displayDetails());
    console.log(`Final Price: $${calculateTax(product).toFixed(2)}`);
}

console.log("\nSORTED BY PRICE");
for (const product of sortByPrice(products)) {
    console.log(`${product.name}: $${product.price.toFixed(2)}`);
}

console.log("\nSORTED BY NAME");
for (const product of sortByName(products)) {
    console.log(product.name);
}

console.log("\nBULK DISCOUNTS");
console.log(`${laptop.name}: $${laptop.getBulkDiscountPrice().toFixed(2)}`);
console.log(`${desk.name}: $${desk.getBulkDiscountPrice().toFixed(2)}`);
