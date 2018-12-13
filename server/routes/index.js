import express from 'express';
const router = express.Router();

import { catchErrors } from '../handlers/errorHandlers';

import { getApp } from '../controllers/appController';
import { getCats } from '../controllers/catController';

router.get('/', catchErrors(getApp));

router.get('/cats', catchErrors(getCats));

export default router;
