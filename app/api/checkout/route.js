import { WEBAPP_URL } from "@/constants";
import { stripe } from "@/lib/stripe";
import { createOrder } from "@/services/order/order.service";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { cartItems, userId, shippingAddress } = await req.json();

  try {
    const stripItems = cartItems?.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.image],
        },
        unit_amount: item.price * 100,
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: stripItems,
      mode: "payment",
      success_url: `${WEBAPP_URL}/order-complete?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${WEBAPP_URL}/order-failed`,
      metadata: {
        email: "abdullah.mia.codes@gmail.com",
      },
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: session.amount_total,
      currency: session.currency,
      automatic_payment_methods: { enabled: true },
    });

    // creating a order in the database
    await createOrder({
      user: userId,
      products: cartItems.map((item) => ({
        product: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      shippingAddress,
      totalAmount: session.amount_total / 100,
      paymentMethod: session.payment_method_types[0],
      paymentDetails: {
        sessionId: session.id,
        transactionId: paymentIntent.id,
        paymentStatus: session.payment_status,
        paymentMethod: session.payment_method_types[0],
      },
    });

    return NextResponse.json({
      sessionId: session.id,
      success: true,
      message: "Session created successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
