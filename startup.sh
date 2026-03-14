#!/bin/bash
set -e

echo "Starting Node.js application at $(date)"
echo "Current directory: $(pwd)"

# Aguardar se houver instalação anterior
sleep 5

# Instalar dependências se necessário
if [ ! -d "node_modules" ] || [ ! -f "node_modules/.installed" ]; then
  echo "Installing dependencies..."
  npm install --production
  touch node_modules/.installed
fi

# Rodar migrations se necessário
if [ -f ".sequelizerc" ]; then
  echo "Running migrations..."
  npm run migrate || echo "Migrations skipped or already run"
fi

echo "Starting application with npm start..."
npm start
