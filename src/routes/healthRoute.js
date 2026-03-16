import express from 'express';

const router = express.Router();

/**
 * GET /health
 * Retorna o status de saúde da API
 */
router.get('/', (req, res) => {
  const healthStatus = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
    checks: {
      memory: getMemoryStatus(),
      database: 'connected' // você pode adicionar verificação real do DB depois
    }
  };

  res.status(200).json(healthStatus);
});

/**
 * GET /health/live
 * Verificação simples se a API está rodando (para Kubernetes liveness probe)
 */
router.get('/live', (req, res) => {
  res.status(200).json({ status: 'alive' });
});

/**
 * GET /health/ready
 * Verificação se a API está pronta para receber requisições (readiness probe)
 */
router.get('/ready', (req, res) => {
  res.status(200).json({ status: 'ready' });
});

/**
 * Função auxiliar para verificar status de memória
 */
function getMemoryStatus() {
  const memUsage = process.memoryUsage();
  return {
    heapUsed: `${Math.round(memUsage.heapUsed / 1024 / 1024)} MB`,
    heapTotal: `${Math.round(memUsage.heapTotal / 1024 / 1024)} MB`,
    external: `${Math.round(memUsage.external / 1024 / 1024)} MB`
  };
}

export default router;
