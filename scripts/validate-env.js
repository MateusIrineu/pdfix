#!/usr/bin/env node

const requiredEnvs = ['DB_USER', 'DB_PASS', 'DB_HOST', 'DB_NAME', 'DB_DIALECT'];
const missing = [];

requiredEnvs.forEach(env => {
  if (!process.env[env]) {
    missing.push(env);
  }
});

if (missing.length > 0) {
  console.error(`❌ ERRO: Variáveis de ambiente não definidas: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('✅ Todas as variáveis de ambiente estão configuradas');
process.exit(0);
