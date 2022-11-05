import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    //get products
    const productsData = await fetch('http://localhost:5000/products');
    const { products } = await productsData.json();

    // get cart
    const savedCart = getStoredCart();
    const initialCart = [];
    // console.log(saveCart)

    for (const id in savedCart) {
        const addedProduct = products.find(product => product._id === id)
        // console.log(addedProduct)
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);


        }
    }

    return { products: products, initialCart: initialCart };

}