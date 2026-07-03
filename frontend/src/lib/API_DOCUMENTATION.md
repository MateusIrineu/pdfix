# Documentação da API - Frontend ↔ Backend

## 📋 Sumário
- [Configuração](#configuração)
- [Estrutura](#estrutura)
- [Endpoints Disponíveis](#endpoints-disponíveis)
- [Uso](#uso)
- [Tratamento de Erros](#tratamento-de-erros)

## ⚙️ Configuração

### 1. Variáveis de Ambiente
Crie o arquivo `.env.local` na raiz do frontend:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### 2. Dependências
```bash
npm install axios
```

## Estrutura

```
frontend/
├── src/
│   ├── lib/
│   │   └── api.js                    # Cliente Axios centralizado
│   └── components/
│       └── curriculo/
│           └── services.js           # Serviços de currículo
```

## 📡 Endpoints Disponíveis

### Competências
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/competencias` | Criar competência |
| GET | `/api/competencias` | Listar competências |
| PATCH | `/api/competencias/:competencia_id` | Atualizar competência |
| DELETE | `/api/competencias` | Deletar todas |

### Experiências Profissionais
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/experiencia` | Criar experiência |
| GET | `/api/experiencia` | Listar experiências |
| PATCH | `/api/experiencia/:experiencia_id` | Atualizar experiência |
| DELETE | `/api/experiencia/:experiencia_id` | Deletar específica |
| DELETE | `/api/experiencia` | Deletar todas |

### Formação Acadêmica
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/formacao` | Criar formação |
| GET | `/api/formacao` | Listar formações |
| GET | `/api/formacao/:formacao_id` | Buscar por ID |
| PATCH | `/api/formacao/:formacao_id` | Atualizar formação |
| DELETE | `/api/formacao/:formacao_id` | Deletar específica |
| DELETE | `/api/formacao` | Deletar todas |

### Usuários
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/usuarios` | Criar usuário |
| GET | `/api/usuarios` | Listar usuários |
| GET | `/api/usuarios/:id` | Buscar por ID |
| PATCH | `/api/usuarios/:id` | Atualizar usuário |
| DELETE | `/api/usuarios/:id` | Deletar usuário |

##  Uso

### Importação
```javascript
import { competenciasAPI, experienciasAPI, formacaoAPI } from '@/lib/api';
```

### Exemplos

#### 1. Criar Competência
```javascript
import { adicionarCompetencia } from '@/components/curriculo/services';

const competencia = {
  nome_competencia: 'React.js',
  categoria: 'Técnica',
  nivel_proficiencia: 'Avançado',
  descricao: 'Desenvolvimento de aplicações web com React'
};

try {
  const resultado = await adicionarCompetencia(competencia);
  console.log('Competência criada:', resultado);
} catch (error) {
  console.error('Erro:', error.message);
}
```

#### 2. Listar Competências
```javascript
import { listarCompetencias } from '@/components/curriculo/services';

try {
  const competencias = await listarCompetencias();
  console.log('Competências:', competencias);
} catch (error) {
  console.error('Erro:', error.message);
}
```

#### 3. Criar Experiência
```javascript
import { adicionarExperiencia } from '@/components/curriculo/services';

const experiencia = {
  titulo_cargo: 'Desenvolvedor Full Stack',
  empresa: 'Tech Company',
  localidade: 'São Paulo, SP',
  data_inicio: '2023-01-01',
  data_fim: '2024-01-01',
  atual: false,
  sobre: 'Desenvolvimento de aplicações web usando React e Node.js'
};

try {
  const resultado = await adicionarExperiencia(experiencia);
  console.log('Experiência criada:', resultado);
} catch (error) {
  console.error('Erro:', error.message);
}
```

#### 4. Criar Formação
```javascript
import { adicionarFormacao } from '@/components/curriculo/services';

const formacao = {
  instituicao: 'Universidade Federal',
  curso: 'Ciência da Computação',
  nivel: 'Bacharelado',
  area_estudo: 'Tecnologia da Informação',
  data_inicio: '2019-01-01',
  data_fim: '2023-12-31',
  concluido: true,
  descricao: 'Formação em desenvolvimento de software'
};

try {
  const resultado = await adicionarFormacao(formacao);
  console.log('Formação criada:', resultado);
} catch (error) {
  console.error('Erro:', error.message);
}
```

## ⚠️ Tratamento de Erros

### Estrutura de Erro
```javascript
{
  message: 'Mensagem de erro',
  response: {
    data: {
      mensagem: 'Mensagem do backend'
    },
    status: 400
  }
}
```

### Exemplo de Tratamento
```javascript
try {
  await adicionarCompetencia(dados);
} catch (error) {
  if (error.message === 'Usuário não autenticado') {
    // Redirecionar para login
    window.location.href = '/login';
  } else if (error.response?.status === 400) {
    // Erro de validação
    alert(error.response.data.mensagem);
  } else {
    // Erro genérico
    alert('Erro ao processar requisição');
  }
}
```

## Autenticação

### Fluxo de Autenticação
1. Usuário faz login com Google (Firebase)
2. `usuario_id` é salvo no localStorage
3. Todas as requisições ao backend incluem `usuario_id` no body

### Obtendo usuario_id
```javascript
// Em services.js
const getUsuarioId = () => {
  return localStorage.getItem('usuario_id') || null;
};
```

### Salvando usuario_id (após login)
```javascript
// Após autenticação com Firebase
const user = firebase.auth().currentUser;
localStorage.setItem('usuario_id', user.uid);
```

## Dados Pessoais

**IMPORTANTE:** Dados pessoais (nome, email, telefone, etc.) **NÃO** vão para o banco de dados. 
Eles são salvos apenas no localStorage e usados para gerar o PDF.

```javascript
import { salvarDadosPessoais, recuperarDadosPessoais } from '@/components/curriculo/services';

// Salvar
await salvarDadosPessoais({
  nome: 'João Silva',
  email: 'joao@email.com',
  telefone: '(11) 99999-9999',
  endereco: 'São Paulo, SP',
  idade: 25,
  linkedin_url: 'https://linkedin.com/in/joaosilva'
});

// Recuperar
const dados = recuperarDadosPessoais();
```

## Iniciar Servidores

### Backend
```bash
cd backend
npm run dev
```
Servidor rodando em: `http://localhost:3001`

### Frontend
```bash
cd frontend
npm run dev
```
Aplicação rodando em: `http://localhost:3000`

## 🧪 Testando a Conexão

1. Inicie o backend e frontend
2. Abra o console do navegador (F12)
3. Execute no console:

```javascript
// Teste manual da API
import { competenciasAPI } from '@/lib/api';

// Teste criar competência
const teste = await competenciasAPI.criar({
  usuario_id: 'test-user-id',
  nome_competencia: 'Teste',
  categoria: 'Teste',
  nivel_proficiencia: 'Básico',
  descricao: 'Teste de conexão'
});

console.log('Resposta:', teste.data);
```

## Estrutura de Dados

### Competência
```javascript
{
  competencia_id: 'uuid',
  usuario_id: 'uuid',
  nome_competencia: 'string (255)',
  categoria: 'string (100)',
  nivel_proficiencia: 'string (50)',
  descricao: 'text',
  criado_em: 'timestamp',
  atualizado_em: 'timestamp'
}
```

### Experiência
```javascript
{
  experiencia_id: 'uuid',
  usuario_id: 'uuid',
  titulo_cargo: 'string (255)',
  empresa: 'string (255)',
  localidade: 'string (255)',
  data_inicio: 'date',
  data_fim: 'date',
  atual: 'boolean',
  sobre: 'string (255)',
  criado_em: 'timestamp',
  atualizado_em: 'timestamp'
}
```

### Formação
```javascript
{
  formacao_id: 'uuid',
  usuario_id: 'uuid',
  instituicao: 'string (255)',
  curso: 'string (255)',
  nivel: 'string (100)',
  area_estudo: 'string (255)',
  data_inicio: 'date',
  data_fim: 'date',
  concluido: 'boolean',
  descricao: 'string (255)',
  criado_em: 'timestamp',
  atualizado_em: 'timestamp'
}
```
