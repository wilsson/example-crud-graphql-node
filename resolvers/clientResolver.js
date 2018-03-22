import axios from 'axios';

const API_CLIENTS = 'http://localhost:3001/clients';

export default {
    Query: {
        clients: async (parent, args, context) => {
            let clients = await axios.get(API_CLIENTS);
            return clients.data;
        },
        client: async (parent, args, context) => {
            let client = await axios.get(`${API_CLIENTS}/${args.id}`);
            return client.data;
        }
    },
    Mutation: {
        createClient: async (parent, args, context) => {
            let client = await axios.post(API_CLIENTS, args);
            return client.data
        },
        deleteClient: async (parent, args, context) => {
            let client = null;
            try {
                client = await axios.delete(`${API_CLIENTS}/${args.id}`);
                return client.data;
            } catch(e) {
                return false;
            }
        }
    }
}