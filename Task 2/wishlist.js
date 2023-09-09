if(localStorage.getItem("wishlist")!=null) {
let wishlistArr = JSON.parse(localStorage.getItem("wishlist"));

for(let i=0;i<wishlistArr.length;i++) {
    let li = document.createElement("li");
    li.innerHTML = `<img src="${wishlistArr[i].image}" />
    <div>
        <span>${wishlistArr[i].name}</span>
        <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>(5.0)</p>
        <h4>&#8377 ${wishlistArr[i].price}</h4>
        <a href="view.html?name=${wishlistArr[i].name}&price=${wishlistArr[i].price}&img=${wishlistArr[i].image}">Buy Now</a>
    </div>`
    document.getElementById("wishlist").appendChild(li);
}
} else {
    document.getElementById("message").innerHTML = "Your wishlist is empty!";
}