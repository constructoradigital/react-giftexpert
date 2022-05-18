

export const getGifs = async(category)=>{


        

    //const key = "xDnW1sk6AGZBPOvXIqVlZP2l9af7w3lp";
    const url =`https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=xDnW1sk6AGZBPOvXIqVlZP2l9af7w3lp`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img=>{
        return{

            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}