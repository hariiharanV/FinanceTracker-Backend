import { fetchBucketListController, createBucketListController, updateBucketListController
    ,fetchBucketListByUserAndYearController
 } from '../controllers/BucketController.js';

import express from 'express'

const router = express.Router();

router.post('/',createBucketListController)

router.get('/:year',fetchBucketListController)

router.get('/username/:username/year/:year',fetchBucketListByUserAndYearController)

router.put('/:id',updateBucketListController)


export default router