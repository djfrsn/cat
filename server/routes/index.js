import express from 'express';
const router = express.Router();

import { catchErrors } from '../views/helpers/errorHandlers';

import { getApp } from '../controllers/appController';
import { getCatsApi } from '../controllers/catController';

import { postFavoriteApi } from '../controllers/catController';

router.get('/', catchErrors(getApp));

router.get('/cats', catchErrors(getCatsApi));

router.post('/favorites', catchErrors(postFavoriteApi));

export default router;
