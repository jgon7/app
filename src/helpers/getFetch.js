

const productos = [
    {id: '1', title: 'Labial líquido Maybelline Superstay Matte Ink Nro. 235', price: '566', categoria: 'labios', picture: '../labial.jpeg'},
    {id: '2', title: 'Base de maquillaje Maybelline Fit Me Nº130', price: '748', categoria: 'rostro', picture: '../base.jpeg'},
    {id: '3', title: 'Sombra Cuarteto Colour Riche Poket Nº108 Loreal', price: '588', categoria: 'ojos', picture: '../paleta.jpeg'},
    {id: '4', title: 'Esmalte Colorama Rosa Antiguo', price: '116', categoria: 'esmalte', picture: '../esmalte.jpeg'},
    {id: '5', title: 'Mascara Max Factor False Lash Effect Black', categoria: 'tratamientosesm', price: '886', picture: '../mascara.jpeg'},
    {id: '6', title: 'Mineral Vichy 89 Ojos 15ml', price: '1200', categoria: 'cremas', picture: '../cremaVichy.jpg'},
    {id: '7', title: 'Crema Antimanchas Cicatricure 50g', price: '999', categoria: 'tratamientos', picture: '../antiMancha.jpg'},
    {id: '8', title: 'Gel Limpiador Espumoso Cerave 473ml', price: '865', categoria: 'limpieza', picture: '../cerave.jpg'},
]

const getFetch = new Promise((resolve, reject) => {
    let condition = true

    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    } else {
        reject('400 - Not Found')
    }
})

export default getFetch;