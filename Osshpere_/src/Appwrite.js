import { Client, Account, Databases } from 'appwrite';

// Initialize Appwrite client
const client = new Client();

// Your Appwrite project details
const ENDPOINT = 'https://cloud.appwrite.io/v1';
const PROJECT_ID = '67b96f9b003d254361e1';

// Configure the client
client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);

// Export the client instance
export default client;