import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: { [id: number]: { item: Buyable, quantity: number } } = {};

    add(item: Buyable, quantity: number = 1): void {
        if (item.id in this._items) {
            this._items[item.id].quantity += quantity;
        } else {
            this._items[item.id] = { item, quantity };
        }
    }

    get items(): { item: Buyable, quantity: number }[] {
        return Object.values(this._items);
    }

    getTotalCost(): number {
        return Object.values(this._items).reduce((total, { item, quantity }) => total + item.price * quantity, 0);
    }

    getTotalCostWithDiscount(discount: number): number {
        const totalCost = this.getTotalCost();
        return totalCost - (totalCost * (discount / 100));
    }

    removeItemById(id: number, quantity: number = 1): void {
        if (id in this._items) {
            if (this._items[id].quantity > quantity) {
                this._items[id].quantity -= quantity;
            } else {
                delete this._items[id];
            }
        }
    }
}