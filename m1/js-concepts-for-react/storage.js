

localStorage.setItem('userId', 87952214);
localStorage.setItem('friends', [45, 78, 98])
localStorage.setItem('friends', JSON.stringify([45, 78, 98]))

const pen = {price: 10, color: 'black'}
localStorage.setItem('pen', pen)
localStorage.setItem('pen', JSON.stringify(pen))
const storedPen = localStorage.getItem('pen')
storedPen
const penObj = JSON.parse(storedPen)
penObj
pen.price = 50
localStorage.setItem('pen', JSON.stringify(pen))


const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if(id && value){
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}

// 09:56 - to watch important something