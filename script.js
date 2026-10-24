let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();

    alert(name + " added to your shopping cart! 💗");
}

function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;
}

document.getElementById("cart-button").addEventListener("click", function () {
    if (cart.length === 0) {
        alert("Your shopping cart is empty!");
        return;
    }

    const items = cart.map(
        (item, index) =>
            `${index + 1}. ${item.name} - ₹${item.price}`
    );

    const total = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    alert(
        "YOUR VAISHNAVI CART 🛍️\n\n" +
        items.join("\n") +
        "\n\nTotal: ₹" + total
    );
});