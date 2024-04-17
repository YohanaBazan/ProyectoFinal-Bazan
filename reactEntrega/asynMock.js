const products = [
    {
        id: '1',
        name: 'Butterfly',
        price: '$5.000',
        category: 'Remeras',
        img: 'https://i.etsystatic.com/49563972/r/il/418d5b/5750858526/il_794xN.5750858526_od8v.jpg',
        stock: '10',
        description: 'Remera con estampa de mariposa y craneo.'

    },

    {
        id: '2',
        name: 'First Coffe',
        price: '$4.000',
        category: 'Remeras',
        img: 'https://img.ltwebstatic.com/images3_pi/2024/02/21/90/170850702958406409e2457d73cda9c6f5fb184e58.webp',
        stock: '8',
        description: 'Musculosa Dark, con frase en ingles "No hablar antes del cafe.'

    },

    {
        id: '3',
        name: 'Lovers',
        price: '$6.000',
        category: 'Remeras',
        img: 'https://img.ltwebstatic.com/images3_pi/2022/04/07/1649313848b28565a235a503c0e47b1e0197b940c1.webp',
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
        description: 'Pantalon de gabardina ancho con estampa de calavera en el bolsillo.'

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
        img: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/f9f3b3c01a284c70806f786b442c5fa2.jpg?imageView2/2/w/800/q/70/format/webp ',
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