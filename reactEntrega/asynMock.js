const products = [
    {
        id: '1',
        name: 'Butterfly',
        price: '$5.000',
        category: 'Remeras',
        img: '../src/assets/images/1.png',
        stock: '10',
        description: 'Crop Top con estampa de mariposa y craneo.'

    },

    {
        id: '2',
        name: 'First Coffe',
        price: '$4.000',
        category: 'Remeras',
        img: '../src/assets/images/3.png',
        stock: '8',
        description: 'Musculosa Dark, con frase en ingles "No hablar antes del cafe.'

    },

    {
        id: '3',
        name: 'Lovers',
        price: '$6.000',
        category: 'Remeras',
        img: '../src/assets/images/20.png',
        stock: '5',
        description: 'Remeron con estampa de carta de tarot de "Los Amantes".'
    },

    {
        id: '4',
        name: 'Pant Skull',
        price: '$20.000',
        category: 'Pantalones',
        img: '../src/assets/images/12.png',
        stock: '7',
        description: 'Pantalon de gabardina ancho con estampa de calavera en el bolsillo  .'

    },

    {
        id: '5',
        name: 'Jean Tarot Dark',
        price: '$30.000',
        category: 'Pantalones',
        img: '../src/assets/images/16.png',
        stock: '4',
        description: 'Jean Wide Leg con roturas y estampas de cartas de Tarot.'
    },

    {
        id: '6',
        name: 'Black Cargo Disaster',
        price: '$25.000',
        category: 'Pantalones',
        img: '../src/assets/images/14.png',
        stock: '9',
        description: 'Jean cargo con cadena y estampas varias.'

    },

    {
        id: '7',
        name: 'Dancers',
        price: '$12.000',
        category: 'Buzos',
        img: '../src/assets/images/5.png',
        stock: '8',
        description: 'Buzo rústico oversize con estampa de esqueletos bailando.'

    },

    {
        id: '8',
        name: 'Dead Love',
        price: '$11.500',
        category: 'Buzos',
        img: '../src/assets/images/7.png',
        stock: '7',
        description: 'Buzo oversize de algodon con friza con estampa de "Aquí yace todo lo que alguna vez amé..'

    },

    {
        id: '9',
        name: 'Rose Love',
        price: '$13.000',
        category: 'Buzos',
        img: '../src/assets/images/10.png',
        stock: '3',
        description: 'Buzo rústico oversize, estampado con carta de Tarot'
    },


]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products);
        },1000);
        })
    }

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod)=> prod.category === categoryId))
        }, 100);
        })
    }

export const getProductsById = (productoId) => {
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve(products.find((prod)=> prod.id === productoId))
        }, 500);
    })
}