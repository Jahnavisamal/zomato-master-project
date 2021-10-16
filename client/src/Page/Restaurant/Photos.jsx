import React, { useState } from "react";
import ImageViewer from 'react-simple-image-viewer';

//components
import PhotoCollection from "../../Components/restaurant/PhotosCollection";

const Photos = () => {
    const [photos,setphotos] = useState([
        "https://b.zmtcdn.com/data/pictures/3/2801173/1f8b4b00a89350f81d7cf4846b62520e.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/bfe/fafb7204922f9277827749bf8684fbfe_1509817502.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/a87/be5ff69372406c136cd3520f3b19ba87_1512579319.jpg",
    ]);   
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [CurrentImg,setCurrentImg] = useState(0);
  const closeViewer= () => setIsMenuOpen(false);
  const openViewer=() => setIsMenuOpen(true);

    return (
      <>
         {isMenuOpen && (
            <ImageViewer
              src={ photos }
              currentIndex={ CurrentImg }
              disableScroll={ false }
              onClose={ closeViewer }
           />
         )}
        <div className="flex flex-wrap gap-2">
           {photos.map((photo)=>(
               <PhotoCollection image={photo} openViewer={openViewer}/>
           ))}
        </div>
      </>
    );
};

export default Photos;

