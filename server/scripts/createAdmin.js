const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Connect to MongoDB - only use ONE connection
mongoose.connect('mongodb://username:password@127.0.0.1:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000,
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

const createAdmin = async () => {
  try {
    // Check if admin already exists
    const adminExists = await User.findOne({ username: 'admin1' });
    
    if (adminExists) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('Admin@123', salt);
    
    // Create admin user
    const admin = new User({
      username: 'admin1',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
      address: {
        street: 'Admin Street',
        city: 'Admin City',
        state: 'Admin State',
        zipCode: '12345',
        country: 'Admin Country'
      }
    });

    await admin.save();
    console.log('Admin user created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
};

createAdmin();