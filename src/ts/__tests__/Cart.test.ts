import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';

class MockBuyable implements Buyable {
    constructor(public id: number, public name: string, public price: number) {}
}

describe('Cart', () => {
    let cart: Cart;
    let item1: Buyable;
    let item2: Buyable;

    beforeEach(() => {
        cart = new Cart();
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
