require("dotenv").config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Order = require("../Model/orderModel");

const createCheckoutSession = async (req, res) => {
  try {
    const { Product } = req.body;

    if (!Product || !Array.isArray(Product)) {
      return res.status(400).json({ error: "Product array is required" });
    }

    const line_items = Product.map(item => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
          images: [item.defaultImage], // must be valid URLs
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quanty, // exact match frontend key
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    const totalAmount = Product.reduce((acc, item) => acc + item.price * item.quanty, 0);

    const newOrder = new Order({
      products: Product,
      amount: totalAmount,
      stripeSessionId: session.id,
    });

    await newOrder.save();

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ error: error.message || "Failed to create session" });
  }
};

module.exports = {
  createCheckoutSession,
};
