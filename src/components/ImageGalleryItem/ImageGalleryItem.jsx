import { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';

function ImageGalleryItem({ largeImageURL, webformatURL, tags }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <GalleryItem onClick={toggleModal}>
        <GalleryImage src={webformatURL} alt={tags} />
      </GalleryItem>
      {showModal && (
        <Modal onClose={toggleModal} large={largeImageURL} alt={tags} />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
