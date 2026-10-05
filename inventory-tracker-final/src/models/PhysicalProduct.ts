import { Product } from "./Product";
import { DiscountableProduct } from "../interfaces/DiscountableProduct";

export class PhysicalProduct extends Product implements DiscountableProduct {
    constructor(
        sku: string,
        name: string,
        price: number,
        public weight: number,
        public quantity: number
    ) {
        super(sku, name, price);
    }

    get formattedWeight(): string {
        return `${this.weight} kg`;
    }

    getPriceWithTax(): number {
        return this.price * 1.10;
    }

    applyDiscount(discountPercent: number): number {
        return this.price * (1 - discountPercent / 100);
    }

    getBulkDiscountPrice(): number {
        if (this.quantity >= 10) {
            return this.applyDiscount(15);
        }

        if (this.weight >= 20) {
            return this.applyDiscount(10);
        }

        return this.price;
    }
}
