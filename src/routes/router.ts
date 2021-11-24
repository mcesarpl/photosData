import express from 'express';
import { PhotosController } from 'src/controllers/PhotosController';

const router = express.Router();

router.get('/photosurls', PhotosController.getPhotosUrls);

router.get('/photosurls/:id', PhotosController.getPhotosUrls);

router.get('/photosurls/:id', PhotosController.getPhotosUrls);

router.get('/photosurls/:id', PhotosController.getPhotosUrls);

export default router;
