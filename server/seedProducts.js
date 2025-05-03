const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
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
    name: 'Cashmere Blend Sweater',
    description: 'Luxurious cashmere blend sweater for ultimate comfort and warmth.',
    price: 129.99,
    category: 'women',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sizes: ['XS', 'S', 'M', 'L'],
    rating: 4.9
  }
];

// Seed data function
const seedProducts = async () => {
  try {
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    const createdProducts = await Product.insertMany(products);
    console.log(`Added ${createdProducts.length} products`);
    
    // Log the IDs for reference
    createdProducts.forEach(product => {
      console.log(`Product: ${product.name}, ID: ${product._id}`);
    });

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedProducts();