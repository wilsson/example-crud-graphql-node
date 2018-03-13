import axios from 'axios';

const API_PRODUCTS = 'http://localhost:3001/products';

export default {
    Query: {
        products: async (parent, args, context) => {
            let products = await axios.get(API_PRODUCTS);
            return products.data;
        },
        product: async (parent, args, context) => {
            let product = await axios.get(`${API_PRODUCTS}/${args.id}`);
            return product.data;
        }
    },
    Mutation: {
        createProduct: async (parent, args, context) => {
            let product = await axios.post(API_PRODUCTS, args);
            return product.data
        },
        deleteProduct: async (parent, args, context) => {
            let product = null;
            try {
                product = await axios.delete(`${API_PRODUCTS}/${args.id}`);
                return product.data;
            } catch(e) {
                return false;
            }
        }
    }
}