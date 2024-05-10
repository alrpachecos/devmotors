This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

# Dev Motors

Site desenvolvido com Next.js que consome uma API de um Sistema de Gerenciamento de Conteúdo (CMS) via REST. Neste caso, estamos usando o Next.js para renderização do lado do servidor (SSR) e do lado do cliente (CSR), proporcionando uma experiência de usuário rápida e dinâmica.

## Pré-requisitos

- Node.js instalado na sua máquina
- Conhecimento básico de JavaScript e React.js
- Acesso à API do seu CMS

## Configuração

1. Clone este repositório para sua máquina local:

```
https://github.com/alrpachecos/devmotors.git
```

2. Instale as dependências do projeto:

```
cd seu-repositorio
npm install ou yarn
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env.local` na raiz do seu projeto e adicione as variáveis de ambiente necessárias. Por exemplo:

```
API_URL=https://sua-api-cms.com
```

Lembre-se de substituir `https://sua-api-cms.com` pela URL da sua API CMS.

## Uso

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```
npm run dev ou yarn dev
```

O servidor estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- `pages/`: Contém as páginas da aplicação.
- `components/`: Componentes reutilizáveis.
- `styles/`: Estilos globais ou específicos para componentes.
- `utils/`: Funções de utilidade ou configuração.
- `public/`: Arquivos estáticos como imagens e fontes.

## Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Basta abrir uma *issue* ou enviar uma *pull request*.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

---
