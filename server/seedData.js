const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fashion-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected for seeding'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

// Sample products data
const products = [
  {
    name: 'Classic White T-Shirt',
    description: 'A comfortable and versatile white t-shirt made from 100% organic cotton.',
    price: 29.99,
    category: 'men',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.5
  },
  {
    name: 'Floral Summer Dress',
    description: 'A beautiful floral print dress perfect for summer days.',
    price: 59.99,
    category: 'women',
    imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sizes: ['XS', 'S', 'M', 'L'],
    rating: 4.8
  },
  {
    name: 'Kids Denim Overalls',
    description: 'Cute and durable denim overalls for active kids.',
    price: 39.99,
    category: 'kids',
    imageUrl: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sizes: ['S', 'M', 'L'],
    rating: 4.3
  },
  {
    name: 'Leather Crossbody Bag',
    description: 'A stylish and practical leather crossbody bag with multiple compartments.',
    price: 89.99,
    category: 'accessories',
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sizes: ['ONE SIZE'],
    rating: 4.7
  },
  {
    name: 'Slim Fit Jeans',
    description: 'Modern slim fit jeans with a comfortable stretch.',
    price: 49.99,
    category: 'men',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.2
  },
  {
    name: 'Cashmere Sweater',
    description: 'Luxurious cashmere sweater for ultimate comfort and warmth.',
    price: 129.99,
    category: 'women',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sizes: ['XS', 'S', 'M', 'L'],
    rating: 4.9
  }
];

// Sample users data
const users = [
  {
    username: 'admin',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
    address: {
      street: '123 Admin St',
      city: 'Admin City',
      state: 'Admin State',
      zipCode: '12345',
      country: 'Admin Country'
    }
  },
  {
    username: 'user',
    password: 'user123',
    name: 'Regular User',
    role: 'user',
    address: {
      street: '456 User St',
      city: 'User City',
      state: 'User State',
      zipCode: '67890',
      country: 'User Country'
    }
  }
];

// Seed data function
const seedData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});

    // Seed products
    await Product.insertMany(products);
    console.log('Products seeded successfully');

    // Seed users with hashed passwords
    for (const user of users) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);
      
      await User.create({
        ...user,
        password: hashedPassword
      });
    }
    console.log('Users seeded successfully');

    console.log('All data seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

// Run the seed function
seedData();