import { useState, useEffect } from 'react';
import './UserManagement.css';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [userFormData, setUserFormData] = useState({
    username: '',
    password: '',
    role: 'user'
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('Authentication token not found. Please log in as admin.');
        // Optionally redirect to login: navigate('/admin/login');
        return; // Stop execution if no token
      }

      const response = await fetch('http://localhost:5000/api/auth/users', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 401) {
        throw new Error('Unauthorized: Invalid or expired token. Please log in again.');
      }
      if (response.status === 403) {
        throw new Error('Forbidden: Admin privileges required.');
      }
      if (!response.ok) {
        // General fetch error
        throw new Error(`Failed to fetch users (Status: ${response.status})`);
      }

      const data = await response.json();
      setUsers(data);
      setError(null); // Clear previous errors on success
    } catch (error) {
      console.error('Error fetching users:', error);
      setError(error.message);
      // Consider logging out or redirecting if auth fails persistently
      // if (error.message.includes('Unauthorized') || error.message.includes('Forbidden')) {
      //   logout(); // Assuming logout is available from useAuth()
      //   navigate('/admin/login');
      // }
    }
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userFormData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to create user');
      }

      setShowUserForm(false);
      setUserFormData({ username: '', password: '', role: 'user' });
      fetchUsers();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/auth/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete user');
      fetchUsers();
    } catch (error) {
      setError('Failed to delete user');
    }
  };

  return (
    <div className="user-management">
      <div className="user-management-header">
        <h1>User Management</h1>
        <button 
          className="add-user-btn"
          onClick={() => setShowUserForm(true)}
        >
          + Add New User
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showUserForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New User</h2>
            <form onSubmit={handleUserSubmit}>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  value={userFormData.username}
                  onChange={(e) =>
                    setUserFormData({ ...userFormData, username: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  value={userFormData.password}
                  onChange={(e) =>
                    setUserFormData({ ...userFormData, password: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Role:</label>
                <select
                  value={userFormData.role}
                  onChange={(e) =>
                    setUserFormData({ ...userFormData, role: e.target.value })
                  }
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="submit" className="save-btn">
                  Save User
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowUserForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserManagement;