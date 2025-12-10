//then catch -> forma mais moderna e mais legível
const myPromise = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                const number = 5
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

function cliente() {
    console.log("Entrou no getAPI")
    const pokemons = [] 
    getAPI("www")
    .then(
        (res) => {
            console.log(res)
            pokemons = res
            renderizar(pokemons)
        }
    )
    .catch(
        (error) => {
            console.log("ERROR: " + JSON.stringify(error))
        }
    )
    
    console.log("Saiu do getAPI")
}
console.log("Entrei no cliente()")
cliente()
console.log("Sai do cliente()")