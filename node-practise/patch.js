// Function: Naye student ko list mein shamil karna
function createStudent(name, age) {
    let newStudent = { id: 3, name: name, age: age };
    database.push(newStudent);
    return "Student successfully created!";
}
function addToCart(productId, quantity) {
    cart.push({ id: productId, qty: quantity });
    return "Item added to cart";
}



function updateQuantity(productId, newQty) {
    let item = cart.find(i => i.id === productId);
    item.qty = newQty; // Sirf quantity badli
    return "Quantity updated";
}


function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    return "Item removed";
}


function createPost(userId, textContent) {
    posts.push({ userId: userId, text: textContent, likes: 0 });
    return "Post published!";
}



function editCaption(postId, newText) {
    let post = posts.find(p => p.id === postId);
    post.text = newText; 
    return "Post updated";
}




function deletePost(postId) {
    posts = posts.filter(p => p.id !== postId);
    return "Post deleted";
}
function registerUser(username, email, password) {
    users.push({ username, email, password, status: "active" });
    return "Account created";
}



function changePassword(username, newPassword) {
    let user = users.find(u => u.username === username);
    user.password = newPassword; 
    return "Password changed";
}
console.log(changePassword);