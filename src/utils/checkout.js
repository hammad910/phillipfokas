import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51MjIzvBjOtgAcySF7jNhy2jSsj3qUcbmYORWhxt8VWYZV4l88y0iHkLcD4FD2YFoCwp1vCBeXRO8rICuEWE2kLE800WafhNyWE"
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
