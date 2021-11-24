import express from 'express';
import PhotosControllerFactory from '@factories/PhotosControllerFactory';

const router = express.Router();

router.get('/photosurls', PhotosControllerFactory.getPhotosUrls);

router.get('/photosurls/:id', PhotosControllerFactory.getPhotosUrls);

router.get('/photosurls/:id', PhotosControllerFactory.getPhotosUrls);

router.get('/photosurls/:id', PhotosControllerFactory.getPhotosUrls);

export default router;
