

const getStoredCart = ()=>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveCartToLS(cart);
}

const removeFromLS = id => {
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}

export {addToLS, getStoredCart, removeFromLS}

// const Localstorage = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Localstorage;

// localStorage.setItem('cart', [])
// localStorage.removeItem('cart')
// localStorage.setItem('cart', '12345')
// localStorage.setItem('cart', JSON.stringify([]))