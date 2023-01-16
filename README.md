FOLDER STRUCTURE

.
├─ public
│ └─ favicon.ico
├─ prisma
│ └─ schema.prisma
├─ src
│ ├─ env
│ │ ├─ client.mjs
│ │ ├─ schema.mjs
│ │ └─ server.mjs
│ ├─ pages
│ │ ├─ \_app.tsx
│ │ ├─ api
│ │ │ ├─ auth
│ │ │ │ └─ [...nextauth].ts
│ │ │ └─ trpc
│ │ │ └─ [trpc].ts
│ │ └─ index.tsx
│ ├─ server
│ │ ├─ auth.ts
│ │ ├─ db.ts
│ │ └─ api
│ │ ├─ routers
│ │ │ └─ example.ts
│ │ ├─ trpc.ts
│ │ └─ root.ts
│ ├─ styles
│ │ └─ globals.css
│ ├─ types
│ │ └─ next-auth.d.ts
│ └─ utils
│ └─ trpc.ts
├─ .env
├─ .env.example
├─ .eslintrc.json
├─ .gitignore
├─ next-env.d.ts
├─ next.config.mjs
├─ package.json
├─ postcss.config.cjs
├─ prettier.config.cjs
├─ README.md
├─ tailwind.config.cjs
└─ tsconfig.json

HOW TO RUN LOCALLY

- First you need to clone to repo your local.
- After you need to change to development branch.
- You can check read me file again.
