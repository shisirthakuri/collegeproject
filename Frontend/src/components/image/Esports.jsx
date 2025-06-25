import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getimage } from '../../store/fetchimage/ImageFetchThunk';
import LoadingSpinner from '../common/LoadingSpinner';

const Esports = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.imagefetch.images);
  const status = useSelector((state)=>state.imagefetch.status)
  const category = "esports";

  useEffect(() => {
    dispatch(getimage({ category }));
  }, [dispatch, category]);

  return (
   <div>
   {
     status === 'pending' ? <LoadingSpinner/>:<div>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10"> Esports Gallery</h1>
      <div
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 "
        style={{ columnGap: '1rem' }}
      >
        {images?.map((img) => (
          <img
            key={img._id}
            src={img.url}
            alt="gallery"
            className="mb-4 w-full rounded break-inside-avoid shadow-md object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
            style={{ width: '100%' }}
          />
        ))}
      </div>
    </div>
   }
   </div>
  );
};

export default Esports;
