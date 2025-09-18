// server/routes/index.ts
import express from 'express';
import publicRoutes from './public.js';
import formsRoutes from './forms.js';
import authRoutes from './auth.js';
import adminRoutes from './admin.js';
const router = express.Router();
// Registering all the sub-routers
router.use('/public', publicRoutes);
router.use('/forms', formsRoutes);
router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
export default router;