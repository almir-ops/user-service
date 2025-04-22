# 👤 User Management Microservice

Este microsserviço é responsável pelo gerenciamento de usuários no sistema. Ele permite o registro de novos usuários, sejam **professores** ou **alunos**.

---

## 🧱 Arquitetura

O projeto segue os princípios da **Clean Architecture**, sendo estruturado nas seguintes camadas:

- `domain`: Entidades e regras de negócio
- `usecases`: Casos de uso como registro de usuários
- `infra`: Implementações de repositórios e acesso a banco (ex: ORM)
- `interface`: Rotas, controllers e middlewares
- `main`: Ponto de entrada da aplicação

---

## 📡 Rotas Disponíveis

### 🆕 Registrar Usuário

**POST** `/users/register`

Registra um novo usuário no sistema.

**Body:**
```json
{
  "name": "Nome do usuário",
  "email": "usuario@example.com",
  "password": "senhaSegura123",
  "type": "professor" // ou "aluno"
}
