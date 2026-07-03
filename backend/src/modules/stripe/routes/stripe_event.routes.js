import express from 'express';
import authMiddleware from '../../../middleware/authMiddleware.js';
import stripeController from '../controllers/stripe_event.controller.js';

const webhookRouter = express.Router();
const stripeRouter = express.Router();

webhookRouter.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  stripeController.handleWebhook
);

stripeRouter.post('/customer-portal', authMiddleware, stripeController.createCustomerPortalSession);

export { webhookRouter, stripeRouter };
export default webhookRouter;