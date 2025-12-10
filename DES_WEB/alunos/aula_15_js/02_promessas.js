//async await -> forma mais moderna e mais legível
const myPromise = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                const number = 4
                if(number %2 === 0) resolve({"msg":`OK ${number}`})
                else reject ({"msg":`NOK ${number}`})
                /*(number % 2 === 0)? 
                resolve({"msg":`OK ${number}`}) : 
                reject ({"msg":`NOK ${number}`})*/
            }
            ,
            2000
        )//setTimeout
    }//resolve, reject
)//Promise

async function getAPI(url) {
    return myPromise
}


async function cliente() {
    try{
        
        const resposta = await getAPI("www")
        //o código após só executa em 2s
        console.log(resposta)
    }
    catch(error) {console.log(error)}
    finally{console.log("liberando recursos...")}
    
}

//interface da aplicação
//não pode travar
console.log("Entrei no cliente()")
cliente()
console.log("Sai do cliente()")