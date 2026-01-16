/**
 * WhatsApp Helper Utility
 * Generates WhatsApp deep links with pre-filled messages for product orders
 */

// WhatsApp business number
const WHATSAPP_NUMBER = '+2348144079201';

/**
 * Generate WhatsApp link with pre-filled product message
 * @param {Object} product - Product object with name, price, etc.
 * @param {number} quantity - Quantity selected
 * @param {string} phoneNumber - WhatsApp business number (optional override)
 * @returns {string} - WhatsApp deep link URL
 */
export const generateWhatsAppLink = (product, quantity = 1, phoneNumber = WHATSAPP_NUMBER) => {
  // Create the product URL (current page URL + product ID)
  const productUrl = `${window.location.origin}/shop#product-${product.id}`;

  // Create the full image URL
  const imageUrl = product.image.startsWith('http')
    ? product.image
    : `${window.location.origin}${product.image}`;

  // Format the message
  const message = `Hi! I'm interested in:

Product: ${product.name}
Price: ₦${product.price.toLocaleString('en-NG')}
Quantity: ${quantity}

Product Link: ${productUrl}
Product Image: ${imageUrl}`;

  // URL encode the message
  const encodedMessage = encodeURIComponent(message);

  // Remove any spaces or special characters from phone number
  const cleanPhoneNumber = phoneNumber.replace(/[^0-9+]/g, '');

  // Generate wa.me link
  return `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
};

/**
 * Format price with currency symbol
 * @param {number} price - Price value
 * @param {string} currency - Currency symbol (default: ₦)
 * @returns {string} - Formatted price string
 */
export const formatPrice = (price, currency = '₦') => {
  return `${currency}${price.toLocaleString('en-NG')}`;
};

/**
 * Open WhatsApp link (handles mobile vs desktop)
 * @param {string} link - WhatsApp deep link
 */
export const openWhatsApp = (link) => {
  window.open(link, '_blank');
};

export default {
  generateWhatsAppLink,
  formatPrice,
  openWhatsApp,
  WHATSAPP_NUMBER
};

export { WHATSAPP_NUMBER };
