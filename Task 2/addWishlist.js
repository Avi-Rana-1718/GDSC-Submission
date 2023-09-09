function addWishlist(Pname, Pprice, Pimage) {
    if(localStorage.getItem("wishlist")==null) {
        console.log("Wishlist is empty");
        let addWishlist = [{
            name:Pname,
            price:Pprice,
            image:Pimage
        }];
        localStorage.setItem("wishlist", JSON.stringify(addWishlist));
    } else {
        let oldWishlist = JSON.parse(localStorage.getItem("wishlist"));
        oldWishlist.push({
            name:Pname,
            price:Pprice,
            image:Pimage
        });
        localStorage.setItem("wishlist", JSON.stringify(oldWishlist));
    }
    document.getElementById("wishlistBtn").innerHTML = `<i class="fa-solid fa-circle-check" style="color:green"></i> Added to wishlist`;
}