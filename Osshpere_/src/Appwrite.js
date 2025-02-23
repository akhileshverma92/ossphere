import { Client, Account, Databases } from 'appwrite';

// Initialize Appwrite client
const client = new Client();

// Your Appwrite project details
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

// Configure the client
client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);



// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);


databases.listDocuments('67b9f9980014a4b99691', '67b9f9a6000e19375858')
.then(response => console.log("Success:", response))
.catch(error => console.error("Error:", error));
// Export the client instance
export default client;