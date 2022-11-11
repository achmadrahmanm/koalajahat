const getUserAsycn = (id, cb) =>{
    const time = id == 1 ? 3000 : 2000;
    setTimeout(() => {
        const name = id === 1 ? 'Achmad' : 'Rahman';
        cb({id , name});
    },time)
}

const userSatu = getUserAsycn(1, (result) => {
    console.log(result);
});

const userDua = getUserAsycn(2, (result) => {
    console.log(result);
});

console.log("Hello world !")