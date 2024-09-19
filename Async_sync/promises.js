let myPromise = new Promise((resolve, reject) => {
    if(true){
        setTimeout(() => {
            resolve('Hello from Promise');
        }, 2000);
    }else{
        reject('Promise rejected');
    }
})
.then(response => console.log(response))
.catch(error => console.error(error));