document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Full Agriculture Products List
    const products = [
        { id: 1, name: "Rice Seeds", price: "₦100 per pack" },
        { id: 2, name: "Tomato Seeds", price: "₦100 per pack" },
        { id: 3, name: "Maize Seeds", price: "₦100 per pack" },
        { id: 4, name: "Beans Seeds", price: "₦100 per pack" },
        { id: 5, name: "Melon Seeds", price: "₦100 per pack" },
        { id: 6, name: "Carrot Seeds", price: "₦100 per pack" },
        { id: 7, name: "Onion Seeds", price: "₦100 per pack" },
        { id: 8, name: "Pepper Seeds", price: "₦100 per pack" },
        { id: 9, name: "Okra Seeds", price: "₦100 per pack" },
        { id: 10, name: "Pumpkin Seeds", price: "₦100 per pack" },
        { id: 11, name: "Hand Trowel", price: "₦2000" },
        { id: 12, name: "Watering Can", price: "₦2000" },
        { id: 13, name: "Plough", price: "₦2000" },
        { id: 14, name: "Shovel", price: "₦2000" },
        { id: 15, name: "Hoe", price: "₦2000" },
        { id: 16, name: "Rake", price: "₦2000" },
        { id: 17, name: "Spade", price: "₦2000" },
        { id: 18, name: "Cutlass", price: "₦2000" },
        { id: 19, name: "Pruning Shears", price: "₦2000" },
        { id: 20, name: "Pitch Fork", price: "₦2000" },
        { id: 21, name: "Organic Compost", price: "₦500" },
        { id: 22, name: "NPK Fertilizer", price: "₦500" },
        { id: 23, name: "Ammonium Nitrate", price: "₦500" },
        { id: 24, name: "Potassium Sulphate", price: "₦500" },
        { id: 25, name: "Manure", price: "₦500" },
        { id: 26, name: "Urea", price: "₦500" },
        { id: 27, name: "Di-Ammonium Phosphate", price: "₦500" },
        { id: 28, name: "Triple Superphosphate", price: "₦500" },
        { id: 29, name: "Zinc Fertilizer", price: "₦500" },
        { id: 30, name: "Complex Fertilizer", price: "₦500" },
        { id: 31, name: "Tractor", price: "₦100,000" },
        { id: 32, name: "Harvester", price: "₦100,000" },
        { id: 33, name: "Planter", price: "₦100,000" },
        { id: 34, name: "Tiller", price: "₦100,000" },
        { id: 35, name: "Mower", price: "₦100,000" },
        { id: 36, name: "Excavator", price: "₦100,000" },
        { id: 37, name: "Drill", price: "₦100,000" },
        { id: 38, name: "Manure Spreader", price: "₦100,000" },
        { id: 39, name: "Sprayer", price: "₦100,000" },
        { id: 40, name: "Baler", price: "₦100,000" },
        { id: 41, name: "Insecticide", price: "₦600" },
        { id: 42, name: "Fungicide", price: "₦600" },
        { id: 43, name: "Glyphosate", price: "₦600" },
        { id: 44, name: "Tylenol", price: "₦600" },
        { id: 45, name: "Caffeine", price: "₦600" },
        { id: 46, name: "Rotenone", price: "₦600" },
        { id: 47, name: "Herbicide", price: "₦600" },
        { id: 48, name: "Baking Soda", price: "₦600" },
        { id: 49, name: "Table Salt", price: "₦600" },
        { id: 50, name: "Pesticide", price: "₦600" }
    ];

    function addToCart(productId) {
        const selectedProduct = products.find(p => p.id === productId);
        if (selectedProduct) {
            cart.push(selectedProduct);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${selectedProduct.name} added to cart!`);
            renderCart();
        }
    }

    function renderCart() {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = "";
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            } else {
                cart.forEach((item, index) => {
                    const cartItem = document.createElement("div");
                    cartItem.classList.add("cart-item");
                    cartItem.innerHTML = `
                        <p>${item.name} - ${item.price}</p>
                        <button onclick="removeItem(${index})">Remove</button>`;
                    cartItemsContainer.appendChild(cartItem);
                });
            }
        }
    }

    function removeItem(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    function checkout() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Proceeding to checkout...");
            localStorage.removeItem("cart");
            window.location.href = "checkout.html";
        }
    }

    renderCart();
});
