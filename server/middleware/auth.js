const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    // Get user ID from header
    const userId = req.header('X-User-Id');
    
    // Check if user ID exists
    if (!userId) {
      return res.status(401).json({ message: 'No user ID provided, access denied' });
    }

    // Find user by id
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    
    // Add user to request
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

// Admin middleware
const adminAuth = async (req, res, next) => {
  try {
    await auth(req, res, () => {
      if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admin privileges required.' });
      }
      next();
    });
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = { auth, adminAuth };