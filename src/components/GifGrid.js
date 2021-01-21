import React  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';


export const GifGrid = ( {category} ) => {

   
    console.log('Categoria en GifGrid:', category);

    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                            
                    {/* {
                        images.map( img => {
                            return <li key={img.id} > {img.title} </li> 
                                    
                        } )
                    }  */}
                    
                    {
                        images.map( img => (
                            // <li key={id} > {title} </li> 
                            <GifGridItem 
                                    key={img.id}
                                    //img={ img }
                                    {...img}
                            />
                        ))
                    }          
            </div>
        </>
    )
}
