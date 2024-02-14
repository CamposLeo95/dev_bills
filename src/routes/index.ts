import { Router } from 'express';

import { baseRoutes } from './base.route';

export const routes = Router();

//! Essa Rota usamos apenas como a principal mostrando as descrições do package.json
routes.use('/', baseRoutes);
