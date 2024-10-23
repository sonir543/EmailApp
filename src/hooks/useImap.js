// src/hooks/useImap.js

import { useState } from 'react';
import axios from 'axios';

const useImap = () => {
  const [emailCount, setEmailCount] = useState(0);

  const connectToImap = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/get-email-count', {
        email: email,
        password: password,
      });
      setEmailCount(response.data.count);
      return response.data.count;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to fetch email count');
    }
  };

  return { connectToImap, emailCount };
};

export default useImap;
