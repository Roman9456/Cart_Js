"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this._items = {};
    }
    add(item, quantity = 1) {
        if (item.id in this._items) {
            this._items[item.id].quantity += quantity;
        }
        else {
            this._items[item.id] = { item, quantity };
        }
    }
    get items() {
        return Object.values(this._items);
    }
    getTotalCost() {
        return Object.values(this._items).reduce((total, { item, quantity }) => total + item.price * quantity, 0);
    }
    getTotalCostWithDiscount(discount) {
        const totalCost = this.getTotalCost();
        return totalCost - (totalCost * (discount / 100));
    }
    removeItemById(id, quantity = 1) {
        if (id in this._items) {
            if (this._items[id].quantity > quantity) {
                this._items[id].quantity -= quantity;
            }
            else {
                delete this._items[id];
            }
        }
    }
}
exports.default = Cart;
