import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_live_51MjIzvBjOtgAcySF5YK79aWcftmYTmA2ETY8bJcaR9IPN5wCXdxlPLh67hJWWqtpuosSJ1jdIpJfdNhTyclD2GUm00EPKfwG4X"
);

export const handleCheckout = async () => {
  try {
    const res = await fetch("https://phillipfokas-backend.onrender.com/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const { id } = await res.json();

    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({ sessionId: id });

    if (result.error) {
      console.error("Stripe Checkout Error:", result.error.message);
    }
  } catch (error) {
    console.error("Checkout Error:", error);
  }
};
