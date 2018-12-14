import express from 'express';
import passport from 'passport';
const router = express.Router();

import { catchErrors } from '../views/helpers/errorHandlers';

import { getApp, getLogin } from '../controllers/appController';
import { getCatsApi } from '../controllers/catController';

import { postFavoriteApi } from '../controllers/catController';

router.get('/', catchErrors(getApp));

router.get('/cats', catchErrors(getCatsApi));

router.post('/favorite', catchErrors(postFavoriteApi));

export default router;
