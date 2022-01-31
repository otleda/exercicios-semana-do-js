/* 
MAP  
e um metodo de Array, quando vc quer gerar um novo array, com as mesma quantidade, com cada item transformado.

 - sintax -
    .map((item, index, array) => {return})
*/

const numbersArray = [1, 2, 3]
const dobleNumberArray = numbersArray.map((item) => {
    return item * 2
})
//R : [2, 4, 6]


// forma reduzida : EXPERT
const numbers = [1, 2, 3]
const dobleNumber = numbers.map( item => item * 2 )

/*============================================================================*/
/*
[01] 
CASO DE USO

UMA LOJA DE INFORMATICA, ESTA EM LIQUIDAÇÃO, "TUDO PELA METADE DO PREÇO", BORA
SIMULAR COM JS.
*/

// forma reduzida : EXPERT
const prices = [ 
    ['notebook','5000'], 
    ['muchila','220'], 
    ['teclado','365'], 
    ['mouse','75'] 
]
const halfPrices = prices.map( price => '\n' + price[0] +' R$ '+ price[1] / 2 )

//const halfPrices = prices.map( price => `'\n'  ${price[0]}  R$  ${price[1]} / 2` )


// forma Tradicional
const priceProduct = [
    ['notebook','5000'], 
    ['muchila','220'],  
    ['teclado','365'],  
    ['mouse','75']  
]
const salesPrices = priceProduct.map( function(value) {
    return '\n' + value[0] +' - R$ '+ value[1] / 2
})


//console.log(`Half Price ---- \n ${halfPrices} \n\nSales Price ----\n ${salesPrices}`)    

/*============================================================================*/

const valores = [35, 135, 46]

const valorPelaMetadedoPreco = valores.map(value => value / 2)

//console.log(valorPelaMetadedoPreco)

/*============================================================================*/

/*
[02] 
CASO DE USO

Vamos construir uma ideia, uma loja para alcancar seus clientes, vai deixar todos os produtos acima de 700 reais pela 
a metade do preço.
*/


const products = [
    {name: 'notebook' , price: 2500},
    {name: 'relogio' , price: 120},
    {name: 'caneca' , price: 45}, 
    {name: 'teclado mecanico' , price: 760},
    {name: 'mouse' , price: 1500},
    {name: 'Headphone' , price: 500},
]

const salesProducts = products.map( product => {
    if(product.price > 700) {
        return { name: product.name, price: product.price / 2 }
    }
    return product
})

// forma reduzida : EXPERT
const salesProducts = products.map (
    value => value.price > 400 ? {name: value.name, price: value.price / 2} : value
)


// console.log("Valores", products)
// console.log("Valores metade do preco acima de 70", salesProducts)
















