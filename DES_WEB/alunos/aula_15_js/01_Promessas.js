const myPromise = new Promise(
    (resolve, reject) => {
        const res = 4;
        if (res % 2 === 0) resolve({"msg":"OK"})
        else reject({"msg":"NOK"})
    }
)

async function getAPI(url) {
    return myPromise
}

async function cliente() {
    try{
        const resposta = await getAPI("www");
        console.log(resposta)
    }catch(error) {
        console.log(error)
    }finally {
        console.log("Liberando recursos...")
    }
    
}

cliente()