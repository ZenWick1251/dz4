
function addOrder() {
    const name = document.getElementById('customerName').value;
    const address = document.getElementById('customerAddress').value;
    const phone = document.getElementById('customerPhone').value;

    if (!name || !address || !phone) {
        alert('Please fill out all fields!');
        return;
    }

    const order = { name, address, phone };
    
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    orders.push(order);

    localStorage.setItem('orders', JSON.stringify(orders));

    document.getElementById('customerName').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('customerPhone').value = '';
    alert('Order added successfully!');
}


function displayOrders() {
    
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    const ordersList = document.getElementById('ordersList');
    ordersList.innerHTML = ''; 

    if (orders.length === 0) {
        ordersList.innerHTML = '<li>No orders found</li>';
        return;
    }

    orders.forEach((order, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = `Order ${index + 1}: Name - ${order.name}, Address - ${order.address}, Phone - ${order.phone}`;
        ordersList.appendChild(listItem);
    });
}
