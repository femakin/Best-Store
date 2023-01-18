// @ts-nocheck

export const getProducts = async () => {

    try {
        const productres = await fetch('http://localhost:9000/store/products/')

        const productdata = await productres.json()

        const products = productdata?.products

        return {
            products: products
        };
    } catch (error) {
        console.log("Error: " + error);
    }
}