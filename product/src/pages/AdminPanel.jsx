import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import './AdminPanel.css';
import { useAuth } from '../context/AuthContext';

function AdminPanel() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
    sizes: '',
  });
  const { isAdmin } = useAuth();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Format the data before sending
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      sizes: formData.sizes.split(',').map(size => size.trim().toUpperCase()),
      rating: 0,
      reviews: []
    };

    // Validate sizes
    const validSizes = ['XS', 'S', 'M', 'L', 'XL'];
    const invalidSizes = productData.sizes.filter(size => !validSizes.includes(size));
    
    if (invalidSizes.length > 0) {
      setError(`Invalid sizes: ${invalidSizes.join(', ')}. Valid sizes are: ${validSizes.join(', ')}`);
      return;
    }

    try {
      const url = editingProduct
        ? `http://localhost:5000/api/products/${editingProduct._id}`
        : 'http://localhost:5000/api/products';
      
      const method = editingProduct ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save product');
      }

      await fetchProducts();
      resetForm();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      imageUrl: product.imageUrl,
      sizes: product.sizes.join(', '),
    });
    setShowAddForm(true);
  };

  const handleDelete = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete product');
      
      await fetchProducts();
    } catch (err) {
      setError(err.message);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      imageUrl: '',
      sizes: '',
    });
    setEditingProduct(null);
    setShowAddForm(false);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  if (loading) return <div className="admin-panel">Loading...</div>;
  if (error) return <div className="admin-panel">Error: {error}</div>;

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <div className="admin-actions">
          <button 
            className="add-product-btn"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            <FontAwesomeIcon icon={faPlus} /> Add New Product
          </button>
          <button 
            className="user-management-btn"
            onClick={() => navigate('/user-management')}
          >
            Manage Users
          </button>
          <button 
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {showAddForm && (
        <form onSubmit={handleSubmit} className="product-form">
          <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Product Name"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Product Description"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Price"
              step="0.01"
              required
            />
          </div>
          <div className="form-group">
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kids">Kids</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="Image URL"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="sizes"
              value={formData.sizes}
              onChange={handleInputChange}
              placeholder="Sizes (comma-separated)"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              {editingProduct ? 'Update Product' : 'Add Product'}
            </button>
            <button type="button" className="cancel-btn" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td>
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="product-thumbnail"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>₹{product.price.toFixed(2)}</td>
                <td>
                  <button 
                    className="edit-btn"
                    onClick={() => handleEdit(product)}
                  >
                    Update
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;