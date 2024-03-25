// Adding student info when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Getting the element to display student info
    var studentInfo = document.getElementById('student');
    // Student ID
    var studentID = "200551810";
    // Student name
    var studentName = "Saksham Mago";
    // Setting the inner HTML of the student info element
    studentInfo.innerHTML = "<p>Student ID: " + studentID + "</p><p>Name: " + studentName + "</p>";
});

// Function to process pizza order
function processOrder() {
    // Getting pizza size
    var size = document.getElementById('pizza_size').value;
    // Array to store selected toppings
    var toppings = [];
    // Getting all topping checkboxes
    var checkboxes = document.getElementsByName('toppings[]');
    // Loop through checkboxes to find selected toppings
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            toppings.push(checkboxes[i].value);
        }
    }
    // Getting quantity
    var quantity = document.getElementById('quantity').value;
    // Getting delivery address
    var deliveryAddress = document.getElementById('delivery_address').value;

    // Creating a Pizza object
    var pizza = new Pizza(size, toppings, quantity, deliveryAddress);

    // Output pizza description to HTML
    var orderDescription = document.getElementById('orderDescription');
    orderDescription.innerHTML = "<h2>Order Summary</h2><p>" + pizza.getDescription() + "</p>";
}

// Class to represent a Pizza object
class Pizza {
    constructor(size, toppings, quantity, deliveryAddress) {
        this.size = size;
        this.toppings = toppings;
        this.quantity = quantity;
        this.deliveryAddress = deliveryAddress;
    }

    // Method to get pizza description
    getDescription() {
        return "Size: " + this.size +"\n"+ "Toppings: " + this.toppings.join(', ') + "\n  Quantity: " + this.quantity + " Delivery Address: " + this.deliveryAddress;
    }
}
