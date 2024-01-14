const stripe = require('stripe')('sk_test_51Kbv4ABU9WDVlpaVbCfU5ySgTaBIAkS2t1nMRLsdrOcKJxRLeOrd1qGF0GwQrdVQwK3OFpYGRtTWm9IPlufMJKsd00VBxVDQT1');

module.exports = async (req, res) => {
  // Extrae la información del pago del cuerpo de la solicitud
  // Procesa el pago
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5500, // por ejemplo, $10.00
      currency: 'eur',
      // Más configuraciones aquí
    });
    res.json({ success: true, clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
