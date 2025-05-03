// ... existing code ...

export const getProduct = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/products/${id}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// ... existing code ...