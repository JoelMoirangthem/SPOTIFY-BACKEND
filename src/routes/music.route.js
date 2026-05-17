const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware')
const multer = require('multer')
const musicController = require('../controllers/music.controller');
const router = express.Router();


const upload = multer({
    storage : multer.memoryStorage()
});
router.post('/upload',authMiddleware.authArtist,upload.single('music'),musicController.createMusic)
router.post('/create-albulm',authMiddleware.authArtist,upload.single('albulm'),musicController.createAlbulm);
router.get('/',authMiddleware.authUser,musicController.getAllMusic)
router.get('/albulm',authMiddleware.authUser,musicController.getAllAlbulm)
router.get('/albulm/:id',authMiddleware.authUser,musicController.getAlbulmById)


module.exports = router;