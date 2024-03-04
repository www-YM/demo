export const faqs = {
  data: {
    id: 4,
    title: 'Payment and billing',
    subtitle:
      "Details about your account's payment status and billing method settings",
    icon: 'fas fa-comments-dollar',
    color: 'yellow',
    items: [
      {
        id: 13,
        title: 'How Inkpodfulfillment Processes Payments?',
        subtitle: '',
        content:
          '<p>If you have an online store connected with Inkpodfulfillment and customer orders from your store are imported into Inkpodfulfillment automatically, there are two separate payments that take place: </p><p>The first payment is the retail transaction between your customer and you. Your customer places an order on your storefront and pays you, using your storefront’s payment platform. </p><p>The second payment is the order fulfillment transaction between you and Inkpodfulfillment. When Inkpodfulfillment gets the order, Inkpodfulfillment charges you for fulfillment and shipping, using Your billing method reserved in Inkpodfulfillment.</p><p>Let&#x27;s put this into context. Say, a customer orders a t-shirt from your store. Their total is $25, shipping included. They will pay you the $25 and you&#x27;ll receive those $25 in the account you&#x27;ve set up on your storefront. Meanwhile, the order is imported into Inkpodfulfillment. The Inkpodfulfillment system detects that it costs $15 to fulfill and ship the order, and gets the funds needed from your billing method reserved in Inkpodfulfillment.</p>',
      },
      {
        id: 14,
        title: 'What is retail shipping price?',
        subtitle: '',
        content:
          '<p>The retail shipping price is the shipping fee you charge your customers. On the other hand, the shipping price of Inkpodfulfillment is the shipping fee we charge you when we send you your order. This means that the amount you pay is:</p><p><strong>Inkpodfulfillment product price + Inkpodfulfillment shipping price</strong></p><p>And the price your customer pays is:</p><p><strong>Your product retail price + Retail shipping price</strong></p><p>You can choose between retail price and retail shipping price. For example, you can make it equal to the shipping price of Inkpodfulfillment so that your customers will cover the cost, or you can set it to zero to provide free shipping. </p>',
      },
      {
        id: 15,
        title: 'How do I accept payments from my orders?',
        subtitle: '',
        content:
          '<p>Remember that there are two transactions for every Inkpodfulfillment order:</p><p>1.Your customer pays you for the order</p><p>2. Inkpodfulfillment charges you for fulfillment</p><p>What\'s left in between is your profit.</p><p>It\'s up to you to set up a method for customers to pay you on your store. You should set up a third-party payment processor. Check out options like PayPal, or<a href="https://account.authorize.net/ui/themes/anet/oauth/PricingPage.aspx?resellerID=103750" rel="noopener noreferrer" target="_blank"> </a>other billing methods.If you have a Shopify store, you can use the <a href="http://www.shopify.com/payments" rel="noopener noreferrer" target="_blank">Shopify payment processing solution</a>.</p>',
      },
      {
        id: 16,
        title: 'What billing method can I set up?',
        subtitle: '',
        content:
          '<p>We currently only support credit card payments at the moment, and we will open more options to satisfy the needs merchants in the future.</p>',
      },
      {
        id: 17,
        title: 'What if my payment is not paid?',
        subtitle: '',
        content:
          "<p>If the order payment fails, there may be multiple reasons-let's look at the suggested troubleshooting steps. </p><p><em><u>Check if a payment method has been added.</u></em></p><p><em><u>Check if there are enough funds available on the card.</u></em></p>",
      },
      {
        id: 18,
        title: 'Can I sell my products in which currency?',
        subtitle: '',
        content:
          '<p>You can use any currency in the sales platform, but please note that Inkpodfulfillment can only charge you in U.S. dollars. If your bank account is set to any other currency, charges will be processed at the exchange rate provided by the bank. </p>',
      },
      {
        id: 19,
        title: 'Do international sellers have to charge sales tax? ',
        subtitle: '',
        content:
          '<p>Yes,they do.Even if you are not in the United States, there may be economic connections, inventory connections, or other types of connections, which means you may be subject to sales tax. </p>',
      },
      {
        id: 58,
        title: "What's retail price?",
        subtitle: '',
        content:
          '<p>The <strong>retail price</strong> is the amount you charge your customer for your product. The difference between your retail price and InkPOD&#x27;s price is your profit. So, if InkPOD charges you $15 for fulfillment and your retail price is $25, your profit is $10.</p>',
      },
    ],
  },
};
