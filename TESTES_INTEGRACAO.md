#  Guia de Testes - Conexão Frontend ↔ Backend

## ✅ Status dos Servidores

### Backend
- ✅ Rodando em: `http://localhost:3001`
- ✅ Banco de dados: Conectado
- ✅ Tabelas sincronizadas

### Frontend
- ✅ Rodando em: `http://localhost:3000`
- ✅ Axios instalado
- ✅ API configurada

---

##  Testes de Integração

### 1. Teste Manual no Console do Navegador

Abra o console do navegador (F12) e execute:

#### Criar um usuário de teste (temporário)
```javascript
// Definir um usuario_id temporário para testes
localStorage.setItem('usuario_id', 'test-user-' + Date.now());
console.log('Usuario ID:', localStorage.getItem('usuario_id'));
```

#### Testar API de Competências
```javascript
// Importar funções (se estiver na página do currículo)
const { adicionarCompetencia, listarCompetencias } = await import('./components/curriculo/services');

// Criar competência
const competencia = {
  nome_competencia: 'React.js',
  categoria: 'Técnica',
  nivel_proficiencia: 'Avançado',
  descricao: 'Framework para desenvolvimento web'
};

try {
  const resultado = await adicionarCompetencia(competencia);
  console.log('✅ Competência criada:', resultado);
} catch (error) {
  console.error('❌ Erro:', error.message);
}

// Listar competências
try {
  const lista = await listarCompetencias();
  console.log('✅ Competências:', lista);
} catch (error) {
  console.error('❌ Erro:', error.message);
}
```

#### Testar API de Experiências
```javascript
const { adicionarExperiencia, listarExperiencias } = await import('./components/curriculo/services');

const experiencia = {
  titulo_cargo: 'Desenvolvedor Full Stack',
  empresa: 'Tech Company',
  localidade: 'São Paulo, SP',
  data_inicio: '2023-01-01',
  data_fim: null,
  atual: true,
  sobre: 'Desenvolvimento de aplicações web'
};

try {
  const resultado = await adicionarExperiencia(experiencia);
  console.log('✅ Experiência criada:', resultado);
} catch (error) {
  console.error('❌ Erro:', error.message);
}

try {
  const lista = await listarExperiencias();
  console.log('✅ Experiências:', lista);
} catch (error) {
  console.error('❌ Erro:', error.message);
}
```

#### Testar API de Formação
```javascript
const { adicionarFormacao, listarFormacoes } = await import('./components/curriculo/services');

const formacao = {
  instituicao: 'Universidade Federal',
  curso: 'Ciência da Computação',
  nivel: 'Bacharelado',
  area_estudo: 'Tecnologia da Informação',
  data_inicio: '2019-01-01',
  data_fim: '2023-12-31',
  concluido: true,
  descricao: 'Graduação completa'
};

try {
  const resultado = await adicionarFormacao(formacao);
  console.log('✅ Formação criada:', resultado);
} catch (error) {
  console.error('❌ Erro:', error.message);
}

try {
  const lista = await listarFormacoes();
  console.log('✅ Formações:', lista);
} catch (error) {
  console.error('❌ Erro:', error.message);
}
```

---

### 2. Teste Direto com Axios

```javascript
// Importar axios
const axios = (await import('axios')).default;

// Definir usuario_id
const usuario_id = localStorage.getItem('usuario_id') || 'test-' + Date.now();
localStorage.setItem('usuario_id', usuario_id);

// Criar competência
try {
  const response = await axios.post('http://localhost:3001/api/competencias', {
    usuario_id: usuario_id,
    nome_competencia: 'Node.js',
    categoria: 'Backend',
    nivel_proficiencia: 'Intermediário',
    descricao: 'Runtime JavaScript'
  });
  console.log('✅ Resposta:', response.data);
} catch (error) {
  console.error('❌ Erro:', error.response?.data || error.message);
}

// Listar competências
try {
  const response = await axios.get('http://localhost:3001/api/competencias');
  console.log('✅ Lista:', response.data);
} catch (error) {
  console.error('❌ Erro:', error.response?.data || error.message);
}
```

---

### 3. Teste via cURL (Terminal)

#### Criar Competência
```bash
curl -X POST http://localhost:3001/api/competencias \
  -H "Content-Type: application/json" \
  -d '{
    "usuario_id": "test-user-123",
    "nome_competencia": "JavaScript",
    "categoria": "Linguagem",
    "nivel_proficiencia": "Avançado",
    "descricao": "Linguagem de programação"
  }'
```

#### Listar Competências
```bash
curl http://localhost:3001/api/competencias
```

#### Criar Experiência
```bash
curl -X POST http://localhost:3001/api/experiencia \
  -H "Content-Type: application/json" \
  -d '{
    "usuario_id": "test-user-123",
    "titulo_cargo": "Desenvolvedor",
    "empresa": "Tech Corp",
    "localidade": "Rio de Janeiro",
    "data_inicio": "2022-01-01",
    "atual": true,
    "sobre": "Desenvolvimento web"
  }'
```

#### Criar Formação
```bash
curl -X POST http://localhost:3001/api/formacao \
  -H "Content-Type: application/json" \
  -d '{
    "usuario_id": "test-user-123",
    "instituicao": "UFMG",
    "curso": "Engenharia de Software",
    "nivel": "Bacharelado",
    "data_inicio": "2018-01-01",
    "concluido": false
  }'
```

---

## 🔍 Verificando no Banco de Dados

Se você tiver acesso ao PostgreSQL, pode verificar os dados diretamente:

```sql
-- Ver competências
SELECT * FROM competencias;

-- Ver experiências
SELECT * FROM experiencia_profissional;

-- Ver formações
SELECT * FROM formacao_academica;

-- Ver usuários
SELECT * FROM usuario;
```

---

## ⚠️ Troubleshooting

### Erro: "Usuário não autenticado"
**Solução:** Defina um `usuario_id` no localStorage
```javascript
localStorage.setItem('usuario_id', 'test-user-123');
```

### Erro: "Network Error"
**Causa:** Backend não está rodando
**Solução:** 
```bash
cd backend
npm run dev
```

### Erro: "CORS"
**Causa:** Backend não tem CORS configurado corretamente
**Verificar:** O backend já tem `app.use(cors())` em `src/index.js`

### Erro: "Cannot read properties of undefined"
**Causa:** Estrutura de resposta da API diferente do esperado
**Solução:** Verificar a resposta no console e ajustar o código

---

## 📊 Checklist de Funcionalidades

- [ ] Backend rodando na porta 3001
- [ ] Frontend rodando na porta 3000
- [ ] Axios instalado no frontend
- [ ] `.env.local` configurado
- [ ] usuario_id salvo no localStorage
- [ ] Criar competência via API
- [ ] Listar competências via API
- [ ] Criar experiência via API
- [ ] Listar experiências via API
- [ ] Criar formação via API
- [ ] Listar formações via API
- [ ] Dados pessoais salvos no localStorage
- [ ] PDF gerado com dados do backend

---

## 🎯 Próximos Passos

1. **Integração com Firebase Auth:**
   - Implementar login com Google
   - Usar `firebase.auth().currentUser.uid` como `usuario_id`

2. **Melhorias no Formulário:**
   - Carregar dados salvos ao abrir o formulário
   - Botões de editar/deletar itens
   - Validação de campos

3. **UX:**
   - Loading states
   - Mensagens de sucesso/erro
   - Confirmação antes de deletar

4. **Performance:**
   - Cache de dados
   - Debounce em buscas
   - Paginação

---

## 📝 Notas Importantes

1. **Dados Pessoais:** NÃO vão para o backend, apenas localStorage
2. **usuario_id:** Vem do Firebase Auth após login com Google
3. **Validação:** Backend valida campos obrigatórios
4. **IDs:** São UUIDs gerados automaticamente pelo Sequelize
5. **Timestamps:** `criado_em` e `atualizado_em` são automáticos
