#!/bin/bash
set -e

echo "Starting Node.js application at $(date)"
echo "Current directory: $(pwd)"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Aguardar se houver instalação anterior
sleep 2

# Instalar dependências SEMPRE (importante!)
echo "Installing dependencies..."
npm install --production

# Verificar se as dependências foram instaladas
if [ ! -d "node_modules" ]; then
  echo "ERROR: node_modules not installed!"
  exit 1
fi

echo "Dependencies installed successfully"
ls -la node_modules | head -20

# Rodar migrations se necessário
if [ -f ".sequelizerc" ]; then
  echo "Running migrations..."
  npm run migrate || echo "Migrations skipped or already run"
fi

echo "Starting application with npm start..."
npm start
