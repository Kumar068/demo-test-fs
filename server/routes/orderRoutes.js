const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Create a new order with COD payment
router.post('/', auth, async (req, res) => {
  try {
    const { items, totalAmount, shippingAddress } = req.body;
    
    // Create new order
    const order = new Order({
      user: req.user.id,
      items,
      totalAmount,
      shippingAddress,
      status: 'pending',
      paymentMethod: 'COD'
    });

    // Save the order
    await order.save();

    // Add order to user's orders array
    await User.findByIdAndUpdate(
      req.user.id,
      { $push: { orders: order._id } }
    );

    // Clear user's cart
    await User.findByIdAndUpdate(
      req.user.id,
      { $set: { cart: [] } }
    );

    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order' });
  }
});

// Get user's orders
router.get('/user', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate('items.product')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

module.exports = router; 