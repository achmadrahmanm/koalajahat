const getUserSycn = (id) =>{
    const name = id === 1 ? 'Achmad' : 'Rahman';
    return {id , name}
}

const userSatu = getUserSycn(1);
console.log(userSatu);

const userDua = getUserSycn(2);
console.log(userDua);

console.log("Hello world !")