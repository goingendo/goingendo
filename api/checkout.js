// Private checkout link: /pay (rewritten here in vercel.json) creates a Stripe
// Checkout Session for one workshop and redirects to it.
// STRIPE_SECRET_KEY and STRIPE_PRICE_ID come from Vercel environment variables only.

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    res.statusCode = 405;
    res.end('Method not allowed');
    return;
  }

  const { STRIPE_SECRET_KEY, STRIPE_PRICE_ID } = process.env;
  if (!STRIPE_SECRET_KEY || !STRIPE_PRICE_ID) {
    console.error('checkout: STRIPE_SECRET_KEY or STRIPE_PRICE_ID is not set');
    res.statusCode = 500;
    res.end('Checkout is not available right now.');
    return;
  }

  const body = new URLSearchParams({
    mode: 'payment',
    'line_items[0][price]': STRIPE_PRICE_ID,
    'line_items[0][quantity]': '1',
    success_url: 'https://goingendo.com/paid.html',
    cancel_url: 'https://goingendo.com/',
  });

  try {
    const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });
    const session = await stripeRes.json();
    if (!stripeRes.ok || !session.url) {
      console.error('checkout: Stripe error', stripeRes.status, session.error && session.error.message);
      res.statusCode = 502;
      res.end('Checkout is not available right now.');
      return;
    }
    res.statusCode = 303;
    res.setHeader('Location', session.url);
    res.end();
  } catch (err) {
    console.error('checkout: request failed', err.message);
    res.statusCode = 502;
    res.end('Checkout is not available right now.');
  }
};
