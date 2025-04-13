const auth = async (req, res, next) => {
  try {
    // Get user ID from header
    const userId = req.header('X-User-Id');

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Add user ID to request
    req.user = { id: userId };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = auth; 