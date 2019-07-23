export function addToCart(product) {
  return {
    type: '@cart/ADD',
    payload: product,
  };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}
