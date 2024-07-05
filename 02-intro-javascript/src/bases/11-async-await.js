// const getImagenPromesa= () =>{
//     const promesa = new  Promise((resolve, reject)=>{
//         resolve('https://asdjasjdpas.com')
//     })
//     return promesa
// }

// const getImagenPromesa = () =>
//     new Promise((resolve, reject) => resolve('https://asdjasjdpas.com'));

// getImagenPromesa().then(console.log());

// const api_key = 'PuI2IjmoZ2zUtFB6zbqmpH4u2SCyIEOf';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

// peticion
//     .then(resp => resp.json())
//     .then(({data}) => {
//         const {url} = data.images.original;
//         const img =document.createElement('img');
//         img.src=url;
//         document.body.append(img);
//     })
//     .catch(console.warn); 

const getImagen = async () => {

    try {
        const api_key = 'PuI2IjmoZ2zUtFB6zbqmpH4u2SCyIEOf';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const { data, } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //Manejo del error
        console.err(error);
    }
}

getImagen();