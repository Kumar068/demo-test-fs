const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  {
    name: "Cashmere Blend Sweater",
    description: "Luxurious cashmere blend sweater perfect for cold weather",
    price: 295.0,
    category: "women",
    imageUrl: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576871337598-c5c626d3d4ec?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["cream", "grey", "navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    details: {
      description: "This luxurious cashmere blend sweater combines timeless design with exceptional comfort. Perfect for any occasion.",
      materials: ["70% Cashmere", "30% Wool"],
      care: ["Hand wash cold", "Do not bleach", "Lay flat to dry"]
    }
  },
  {
    name: "Classic Oxford Shirt",
    description: "Timeless oxford shirt for a polished look",
    price: 129.0,
    category: "men",
    imageUrl: "https://images.unsplash.com/photo-1602810316693-3667c854239a?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602810316693-3667c854239a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810318661-7687f71c24b3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810321682-3f3ddc954556?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["white", "blue", "pink"],
    sizes: ["S", "M", "L", "XL"],
    details: {
      description: "A versatile oxford shirt crafted from premium cotton. Perfect for both formal and casual occasions.",
      materials: ["100% Cotton", "Mother of Pearl Buttons"],
      care: ["Machine wash cold", "Tumble dry low", "Iron if needed"]
    }
  },
  {
    name: "Kids Denim Jacket",
    description: "Stylish and durable denim jacket for kids",
    price: 89.0,
    category: "kids",
    imageUrl: "https://images.unsplash.com/photo-1543076659-9380cdf10613?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1543076659-9380cdf10613?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519278409-1f56fdda7485?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519278404-f6a5c47ab5c3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519278404-7d25b8e4e3f2?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["blue", "light-blue"],
    sizes: ["S", "M", "L"],
    details: {
      description: "A classic denim jacket designed for kids. Features comfortable fit and practical pockets.",
      materials: ["100% Cotton Denim", "Metal Buttons"],
      care: ["Machine wash cold", "Tumble dry medium", "Do not bleach"]
    }
  },
  {
    name: "Premium Leather Bag",
    description: "Elegant and spacious premium leather bag with modern design",
    price: 459.0,
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103246-bc0172f69820?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103473-498310168f82?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103235-8c5b2789b32f?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["brown", "black", "tan"],
    details: {
      description: "A luxurious premium leather bag that combines style with functionality. Features high-quality hardware and spacious compartments.",
      materials: ["Premium Full-grain Leather", "Gold-toned Hardware", "Suede Interior Lining"],
      care: ["Clean with leather cleaner only", "Store in dust bag when not in use", "Avoid water exposure", "Apply leather conditioner every 3-6 months"]
    }
  },
  {
    name: "Premium Sneakers",
    description: "Stylish and comfortable premium sneakers",
    price: 259.0,
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653214-1c7fb8011835?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653324-c3315e2ce8c2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653435-c3315e2ce8d3?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["white", "black", "grey"],
    details: {
      description: "Premium quality sneakers featuring modern design and superior comfort. Perfect for both casual wear and light athletic activities.",
      materials: ["Premium Leather", "Breathable Mesh", "Rubber Sole"],
      care: ["Clean with soft brush", "Use specialized sneaker cleaner", "Air dry only", "Store in cool, dry place"]
    }
  },
  {
    name: "Silk Wrap Dress",
    description: "Elegant silk wrap dress for any occasion",
    price: 385.0,
    category: "women",
    imageUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c957?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c958?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c959?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["black", "red", "navy"],
    sizes: ["XS", "S", "M", "L"],
    details: {
      description: "A versatile silk wrap dress that transitions seamlessly from day to night. Features a flattering silhouette and premium silk fabric.",
      materials: ["100% Silk"],
      care: ["Dry clean only", "Cool iron if needed", "Do not tumble dry"]
    }
  },
  {
    name: "Wool Blend Coat",
    description: "Warm and stylish wool blend coat for winter",
    price: 495.0,
    category: "women",
    imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e6?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["camel", "black", "grey"],
    sizes: ["XS", "S", "M", "L", "XL"],
    details: {
      description: "A luxurious wool blend coat that provides warmth without compromising on style. Features classic design and premium materials.",
      materials: ["80% Wool", "20% Cashmere"],
      care: ["Dry clean only", "Store on padded hanger", "Use garment bag for storage"]
    }
  },
  {
    name: "Merino Wool Sweater",
    description: "Classic merino wool sweater for men",
    price: 245.0,
    category: "men",
    imageUrl: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f5?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["navy", "grey", "black"],
    sizes: ["S", "M", "L", "XL"],
    details: {
      description: "A classic merino wool sweater that offers both warmth and breathability. Perfect for layering in any season.",
      materials: ["100% Merino Wool"],
      care: ["Machine wash cold", "Lay flat to dry", "Do not bleach"]
    }
  },
  {
    name: "Cotton Sweater",
    description: "Comfortable cotton sweater for kids",
    price: 65.0,
    category: "kids",
    imageUrl: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771930-78848d9293e9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771930-78848d9293f0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771930-78848d9293f1?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["navy", "red", "grey"],
    sizes: ["S", "M", "L"],
    details: {
      description: "A cozy cotton sweater designed for kids' comfort. Features soft fabric and easy-care materials.",
      materials: ["100% Cotton"],
      care: ["Machine wash cold", "Tumble dry low", "Do not bleach"]
    }
  },
  {
    name: "Leather Tote Bag",
    description: "Spacious leather tote bag for everyday use",
    price: 295.0,
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1590874103235-8c5b2789b32f?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590874103235-8c5b2789b32f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103235-8c5b2789b32e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103235-8c5b2789b32d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103235-8c5b2789b32c?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["black", "brown", "tan"],
    details: {
      description: "A practical and stylish leather tote bag perfect for daily use. Features multiple compartments and durable construction.",
      materials: ["Full-grain Leather", "Cotton Lining", "Metal Hardware"],
      care: ["Clean with leather cleaner", "Store in dust bag", "Avoid direct sunlight"]
    }
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    const insertedProducts = await Product.insertMany(products);
    console.log('Added new products');
    
    // Log the IDs of inserted products
    console.log('Product IDs:');
    insertedProducts.forEach(product => {
      console.log(`${product.name}: ${product._id}`);
    });

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 