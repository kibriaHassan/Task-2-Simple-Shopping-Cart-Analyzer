function analyzeCart() {

    let customerName = document.getElementById("customerName").value;
    let pricesInput = document.getElementById("prices").value;

    if (customerName === "" || pricesInput === "") {
        alert("Please fill all fields");
        return;
    }

    // Convert prices to array
    let prices = pricesInput.split(",").map(Number);

    // Calculate total price
    let totalPrice = 0;
    for (let i = 0; i < prices.length; i++) {
        totalPrice += prices[i];
    }

    // Discount logic
    let discountRate = 0;
    if (totalPrice >= 3000) {
        discountRate = 0.20;
    } else if (totalPrice >= 2000) {
        discountRate = 0.10;
    }

    let discountAmount = totalPrice * discountRate;
    let finalPayable = totalPrice - discountAmount;

    // Function to find lowest price
    function findLowestPrice(arr) {
        let lowest = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < lowest) {
                lowest = arr[i];
            }
        }
        return lowest;
    }

    let lowestPrice = findLowestPrice(prices);

    // Count characters in customer name (without .length)
    let charCount = 0;
    for (let ch of customerName) {
        charCount++;
    }

    // Display result
    document.getElementById("result").innerHTML = `
        <strong>Customer Name:</strong> ${customerName}<br>
        <strong>Total Price:</strong> ${totalPrice} Tk<br>
        <strong>Discount Amount:</strong> ${discountAmount.toFixed(2)} Tk<br>
        <strong>Final Payable Amount:</strong> ${finalPayable.toFixed(2)} Tk<br>
        <strong>Lowest Product Price:</strong> ${lowestPrice} Tk<br>
        <strong>Characters in Name:</strong> ${charCount}
    `;
}