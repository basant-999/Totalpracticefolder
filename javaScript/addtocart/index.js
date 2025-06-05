 let cart = [];

    function addToCart(id, name, price) {
      const existing = cart.find(item => item.id === id);

      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ id, name, price, qty: 1 });
      }

      showCart();
    }

    function showCart() {
      const cartList = document.getElementById('cartItems');
      cartList.innerHTML = '';

      if (cart.length === 0) {
        cartList.innerHTML = '<li>Cart is empty</li>';
        return;
      }

      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price} x ${item.qty}`;
        cartList.appendChild(li);
      });
    }