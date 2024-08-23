import { WEBAPP_URL } from "@/constants";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req) {
  const cartItems = await req.json();

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
      cancel_url: `${WEBAPP_URL}/checkout?canceled=true`,
      metadata: {
        email: "abdullah.mia.codes@gmail.com",
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
