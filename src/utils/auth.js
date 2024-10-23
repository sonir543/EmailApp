import { fetchEmailCount } from '../services/imapService';

export const authenticateUser = async (email, appPassword) => {
    try {
        // Attempt to fetch email count to validate credentials
        await fetchEmailCount(email, appPassword);
        return true; // Authentication successful
    } catch (error) {
        console.error('Authentication error:', error);
        return false; // Authentication failed
    }
};

