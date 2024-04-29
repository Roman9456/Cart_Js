"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = __importDefault(require("../service/Cart"));
class MockBuyable {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
describe('Cart', () => {
    let cart;
    let item1;
    let item2;
    beforeEach(() => {
        cart = new Cart_1.default();
        item1 = new MockBuyable(1, 'Book', 10);
        item2 = new MockBuyable(2, 'Phone', 500);
    });
    test('add item to cart', () => {
        cart.add(item1);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0].quantity).toBe(1);
    });
    test('add multiple items to cart', () => {
        cart.add(item1, 2);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0].quantity).toBe(2);
    });
    test('remove item from cart', () => {
        cart.add(item1);
        cart.removeItemById(1);
        expect(cart.items.length).toBe(0);
    });
    test('remove specific quantity of items from cart', () => {
        cart.add(item1, 3);
        cart.removeItemById(1, 2);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0].quantity).toBe(1);
    });
    test('calculate total cost', () => {
        cart.add(item1, 2);
        cart.add(item2);
        expect(cart.getTotalCost()).toBe(2 * item1.price + item2.price);
    });
    test('calculate total cost with discount', () => {
        cart.add(item1, 2);
        cart.add(item2);
        expect(cart.getTotalCostWithDiscount(10)).toBeCloseTo((2 * item1.price + item2.price) * 0.9, 2);
    });
});
