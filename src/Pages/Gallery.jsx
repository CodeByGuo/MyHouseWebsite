import Layout from "../components/Layout.jsx";
import React, { useEffect, useState } from 'react';
import {storage} from '../firebase.js';
import {ref,  listAll, getDownloadURL} from 'firebase/storage';
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery(){
    //This fetches images from the data base and puts it in an array
    const fetchImages = async () =>{
        const storageRef = ref(storage, "imagesGallery/");
        let images = [];
        //step 1 get images
        try{
            const files = await listAll(storageRef);
            for(const fileRef of files.items){
                const url = await getDownloadURL(fileRef);
                images.push(url);
            }
        } catch (error){
            console.error("Error fetching images from fire base")
        }
        return images;
    };

    //Checks if lightgallery has loaded
    const onInit = () =>{
        console.log('lightGallery has been initialized')
    };
    //more stuff for images
    const[imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        fetchImages().then(urls => setImageUrls(urls));
    }, []);

    return(
        <Layout>
            <div className={"App"}>
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {imageUrls.map(url => (
                        <a key={url} data-lg-size="1406-1390" href={url}>
                            <img className="img-responsive" src={url} loading={"lazy"}/>
                        </a>
                    ))}

                </LightGallery>
            </div>
        </Layout>
    );
}

export default Gallery;