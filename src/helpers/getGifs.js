  export const getGifs = async ( category ) => {

        console.log('Categoria en GetGif: ', category);

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=66qX9SHlDu2DhkZDBFFJKld5pmCUOpyo`;
        const respuesta = await fetch ( url );
        
        console.log(url);   

        //Como me interesa la data , de la data accedo en el const
        const { data } = await respuesta.json();
        //console.log(data);

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;        
    }
