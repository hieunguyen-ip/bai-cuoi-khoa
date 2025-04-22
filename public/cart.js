// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find(item => item.name === name);

  if (existingProduct) {
    existingProduct.quantity += 1; // Tăng số lượng nếu sản phẩm đã tồn tại
  } else {
    cart.push({ name, price, quantity: 1 }); // Thêm sản phẩm mới
  }

  localStorage.setItem("cart", JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
  alert("Thêm vào giỏ hàng thành công!"); // Hiển thị thông báo
}

// Hàm tải giỏ hàng và hiển thị trên trang
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartTable = document.getElementById("cart-items");
  let totalPrice = 0;

  cartTable.innerHTML = ""; // Xóa nội dung cũ

  cart.forEach((item, index) => {
    totalPrice += item.price * item.quantity;

    const row = `
            <tr>
                <td>${item.name}</td>
                <td>${item.price.toLocaleString()} VND</td>
                <td>
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    ${item.quantity}
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </td>
                <td><button onclick="removeFromCart(${index})">Xóa</button></td>
            </tr>
        `;
    cartTable.innerHTML += row;
  });

  document.getElementById("total-price").innerText = totalPrice.toLocaleString() + " VND";
}

// Hàm thay đổi số lượng sản phẩm
function changeQuantity(index, amount) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].quantity + amount > 0) {
    cart[index].quantity += amount;
  } else {
    cart.splice(index, 1); // Xóa sản phẩm nếu số lượng <= 0
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart(); // Cập nhật lại giao diện
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // Xóa sản phẩm
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart(); // Cập nhật lại giao diện
}

// Tải giỏ hàng khi trang được tải
if (window.location.pathname.includes("shop.html")) {
  window.onload = loadCart;
}