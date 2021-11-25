import express from 'express';
import { PhotosController } from 'src/controllers/PhotosController';

const router = express.Router();

router.get('/photosurls', PhotosController.getPhotosUrls);

router.get('/filterproprieties', PhotosController.filterProprieties);

router.get('/patterntitle', PhotosController.patternTitle);

router.get('/formated', PhotosController.getFormated);

export default router;
