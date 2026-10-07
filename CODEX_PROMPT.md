# Codex Prompt — Portfolio V2.0 / Bold Editorial Concept

> Variante visual mais ousada da V2 do portfólio de Antonio Silos.
>
> **Versão:** 1.0  
> **Contexto obrigatório:** `PORTFOLIO_V2_CONTEXT.md`
>
> Este prompt mantém os mesmos fatos, hierarquia profissional e critérios de autenticidade da V2 clean, mas propõe uma linguagem visual mais expressiva, editorial e autoral.

---

# 1. Objetivo

Crie uma segunda interpretação visual do Portfolio V2.0.

Ela deve ser:

- mais ousada;
- mais memorável;
- mais editorial;
- mais autoral;
- mais dinâmica;
- ainda profissional;
- ainda apropriada para recrutadores;
- ainda simples de usar e manter.

Não transformar “ousado” em:

- excesso de efeitos;
- neon;
- estética gamer;
- cyberpunk;
- landing page crypto;
- partículas;
- 3D gratuito;
- scroll experimental;
- interface que prioriza estética sobre leitura.

A ousadia deve vir principalmente de:

> composição + escala + tipografia + contraste + ritmo + imagens reais + hierarquia.

---

# 2. Fonte de verdade

Leia integralmente:

```text
PORTFOLIO_V2_CONTEXT.md
```

Esse documento continua sendo a fonte de verdade para:

- carreira;
- experiência;
- formação;
- idiomas;
- stack;
- projetos;
- Equilibrium;
- conteúdo permitido;
- informações que não devem aparecer.

Não invente fatos, projetos, métricas, URLs ou funcionalidades.

Orbit continua fora enquanto o contexto disser que ele não é um projeto implementado.

---

# 3. Relação com a versão clean

Esta não deve ser apenas:

> “a versão clean com cores mais fortes”.

Ela precisa propor uma composição diferente.

Preserve:

- clareza;
- profissionalismo;
- conteúdo;
- acessibilidade;
- performance;
- responsividade;
- HTML/CSS/JS simples;
- internacionalização;
- case dedicado do Equilibrium.

Mude principalmente:

- composição;
- ritmo visual;
- escala;
- tipografia;
- grid;
- tratamento dos projetos;
- transições;
- contraste entre seções.

---

# 4. Conceito visual

## Editorial Tech / Product Engineering

A referência conceitual deve estar mais próxima de:

- portfólio editorial;
- case study de produto digital;
- apresentação de engenharia;
- revista contemporânea;
- design studio minimalista;

e menos próxima de:

- currículo online;
- dashboard;
- template de desenvolvedor;
- landing page SaaS genérica.

O site deve parecer feito especificamente para Antonio.

---

# 5. Paleta

Use uma base de alto contraste.

Direção sugerida:

### Base
- charcoal / graphite;
- azul-marinho muito escuro;
- off-white quente.

### Accent principal
Use uma cor mais viva que a versão clean.

Preferência:

- cobalt / electric blue controlado.

### Accent secundário
Pode existir em pequenas doses:

- dourado queimado;
- areia;
- âmbar discreto.

### Regra

Não usar mais de dois accents relevantes na mesma composição.

Não usar gradiente rainbow.

Não usar glow.

Não usar neon.

---

# 6. Alternância de superfícies

Não deixe a página inteira presa a um único fundo escuro.

Crie ritmo alternando:

- seção escura;
- seção clara;
- grandes áreas neutras;
- imagens ocupando área significativa.

Exemplo conceitual:

```text
Hero               → dark
Selected Work      → warm light
Experience         → dark
About / Stack      → light
Education          → neutral
Footer             → dark
```

A alternância deve ajudar a separar capítulos da narrativa.

---

# 7. Grid

Use grid editorial forte.

Preferir:

- 12 colunas no desktop;
- composições assimétricas;
- elementos que ocupem 7/5, 8/4 ou 9/3 colunas;
- alinhamentos consistentes;
- margens generosas.

Não centralizar tudo.

Não colocar todas as seções como:

```text
título centralizado
texto centralizado
3 cards centralizados
```

O layout deve ter direção.

---

# 8. Tipografia

A tipografia deve ser um dos principais elementos visuais.

Use:

- títulos grandes;
- subtítulos pequenos e precisos;
- contraste forte entre escala de títulos e corpo;
- texto corrido confortável;
- monospace apenas como detalhe técnico.

É permitido utilizar títulos com tamanho responsivo usando `clamp()`.

Evitar:

- fontes futuristas;
- fontes hacker;
- monospace como fonte principal;
- excesso de pesos.

### Elementos editoriais possíveis

- números grandes de seção;
- labels em caixa alta;
- pequenos códigos como `01`, `02`, `03`;
- textos laterais;
- keywords técnicas em monospace.

---

# 9. Header

O header deve ser mínimo.

Pode usar:

```text
AS.
Work
Experience
About
Contact
PT / FR / EN
```

ou solução equivalente.

Requisitos:

- sticky discreto;
- fundo que responda ao scroll sem efeitos exagerados;
- navegação acessível;
- estado ativo simples;
- mobile funcional.

Evitar header grande ocupando espaço vertical.

---

# 10. Hero mais ousado

O Hero deve ser marcante.

Evitar repetir a estrutura convencional:

```text
foto redonda
nome
cargo
texto
dois botões
```

## Direção sugerida

Criar composição assimétrica.

Exemplo conceitual:

```text
[ pequeno label ]
SOFTWARE
DEVELOPER

Antonio Silos

Python / Backend / Web

                  Construo soluções
                  orientadas a problemas
                  reais.

[Selected Work ↓]
```

O título pode ocupar grande parte do viewport.

A foto, se utilizada, não precisa ser retrato circular.

Pode:

- ocupar uma coluna lateral;
- aparecer em recorte editorial;
- possuir crop retangular;
- integrar-se ao grid.

Não modificar a identidade da foto.

---

# 11. Microcopy no Hero

Pode existir uma pequena linha editorial como:

```text
Based in Brazil · Building for the web
```

somente se estiver alinhada ao contexto e não introduzir fatos desnecessários.

Não inventar disponibilidade, localização específica ou condição de trabalho.

---

# 12. Projetos em destaque

Esta deve ser a seção mais visual da home.

Evitar pequenos cards iguais.

## Equilibrium

O Equilibrium deve ocupar uma composição significativamente maior.

Exemplo:

```text
01 / FEATURED PROJECT

EQUILIBRIUM
Aplicação web multiusuário para gestão...

[ screenshot grande ]

Python
Flask
MySQL
JavaScript

View case →
GitHub →
```

A imagem pode ocupar entre metade e dois terços da largura em desktop.

Título grande.

Descrição curta.

Stack discreta.

---

# 13. Interação dos projetos

Hover pode incluir:

- leve zoom da imagem;
- mudança sutil de posição;
- underline animado;
- pequena alteração de contraste;
- seta que se desloca alguns pixels.

Não usar:

- cards virando;
- tilt 3D;
- hover obrigatório para revelar descrição;
- overlay cobrindo todo o projeto;
- efeitos pesados.

Informação essencial deve permanecer visível.

---

# 14. Projetos secundários

Perfil de Crédito e Landing Page podem aparecer em composição diferente do Equilibrium.

Exemplo:

```text
02
Perfil de Crédito
[ imagem ]

03
Landing Page
[ imagem ]
```

É permitido um layout assimétrico com um projeto maior que o outro, desde que a hierarquia siga o contexto.

Projetos experimentais podem aparecer em uma lista mais simples no final.

---

# 15. Página dedicada do Equilibrium

Criar/manter:

```text
projects/equilibrium.html
```

O case deve ser visualmente mais editorial que um README.

## Hero do case

Pode conter:

```text
EQUILIBRIUM
Web Application / 2026

Python · Flask · MySQL

[ screenshot hero ]
```

Depois:

```text
Overview
Problem
Solution
Architecture
Security
Testing
Technical decisions
Screenshots
Learnings
Links
```

---

# 16. Arquitetura do Equilibrium

Representar a arquitetura com HTML/CSS simples.

Não usar imagem genérica.

Pode utilizar:

```text
Browser
   ↓
Flask Routes
   ↓
Services
   ↓
MySQL
```

Transformado em um diagrama visual simples e elegante.

Não inventar camadas inexistentes.

---

# 17. Segurança e testes

Essas seções são diferenciais reais do Equilibrium.

Não escondê-las em textos enormes.

Pode usar composição editorial como:

```text
SECURITY

CSRF Protection
Rate Limiting
bcrypt
Parameterized Queries
Role-based Authorization
Tenant Isolation
```

e:

```text
TESTING

pytest
Flask test client
Auth
Authorization
CLI
```

Sem transformar isso em números ou métricas não existentes.

---

# 18. Experiência profissional

Evitar cards tradicionais.

Preferir timeline editorial ou lista vertical.

Exemplo:

```text
2026 — NOW
Grupo Acert

Técnico de Suporte N1

Diagnóstico de incidentes
SQL / Firebird
REST APIs / Postman
Reprodução de erros
QA / DEV handoff
```

A timeline deve ser simples e legível.

---

# 19. Sobre

Pode usar layout dividido.

Exemplo:

```text
ABOUT

[ texto grande / manifesto curto ]

                     [ texto menor ]
                     trajetória
                     experiência
                     foco atual
```

Não escrever manifesto grandioso.

Continuar factual.

---

# 20. Stack

Em vez de cards, utilizar composição tipográfica.

Exemplo:

```text
BACKEND
Python
Flask
SQL
MySQL
REST APIs

FRONTEND
HTML
CSS
JavaScript

DATA
Pandas
Scikit-learn
Jupyter
```

Os nomes podem usar escala diferenciada.

Sem logos obrigatórios.

---

# 21. Section markers

É permitido usar marcadores editoriais:

```text
01 / WORK
02 / EXPERIENCE
03 / ABOUT
04 / STACK
05 / EDUCATION
```

Eles ajudam a reforçar a identidade da versão ousada.

Manter consistência.

---

# 22. Linhas e grids decorativos

Pode usar:

- linhas finas;
- divisores;
- grid sutil;
- coordenadas tipográficas;
- pequenos labels;
- marcas editoriais.

Não usar elementos decorativos sem alinhamento com a estrutura.

---

# 23. Movimento

A versão bold pode usar mais movimento que a clean.

Ainda assim, seja conservador.

Permitido:

- reveal suave ao entrar no viewport;
- fade + translate pequeno;
- image zoom discreto;
- underline animado;
- header transition;
- indicador de scroll;
- mudança sutil de background.

Evitar:

- parallax pesado;
- scroll hijacking;
- cursor customizado;
- animações contínuas;
- textos correndo sem função;
- objetos seguindo o mouse.

---

# 24. Scroll reveal

Se implementar:

- usar `IntersectionObserver`;
- animações curtas;
- elemento já deve ser acessível sem JS;
- respeitar `prefers-reduced-motion`;
- não animar todos os elementos individualmente.

Use movimento para reforçar capítulos, não para criar espetáculo.

---

# 25. Internacionalização

Manter os requisitos da V2:

```text
PT
FR
EN
```

Ordem:

1. `?lang=`;
2. `localStorage`;
3. navegador;
4. PT.

Preservar idioma entre home e case.

A mudança de idioma não deve quebrar layout mesmo quando francês/inglês tiverem comprimentos diferentes.

---

# 26. Responsividade

A composição assimétrica deve virar linear de forma elegante no mobile.

Não tentar preservar layouts desktop complexos em telas pequenas.

No mobile:

- reduzir assimetria;
- manter tipografia marcante;
- uma coluna;
- imagens grandes;
- bom espaçamento;
- navegação simples.

Nenhuma seção deve depender de hover.

---

# 27. Acessibilidade

A ousadia visual não pode comprometer:

- contraste;
- teclado;
- foco;
- headings;
- leitura;
- tamanho de fonte;
- touch targets;
- reduced motion;
- semântica.

O design deve continuar utilizável sem animações.

---

# 28. Performance

Não adicionar bibliotecas pesadas para obter efeitos simples.

Preferir:

```text
CSS
IntersectionObserver
JavaScript nativo
```

Evitar frameworks de animação.

O site deve continuar adequado ao Netlify e a hospedagem estática.

---

# 29. Assets

Use screenshots reais.

Não gerar:

- interfaces falsas;
- mockups de dispositivo desnecessários;
- gráficos fictícios;
- dashboards inexistentes.

Se um screenshot real tiver proporção ruim, pode:

- recortar;
- enquadrar;
- utilizar object-fit;
- compor dentro do layout.

Não modificar seu conteúdo para fingir funcionalidades.

---

# 30. Foto profissional

Se a foto atual for usada:

- tratamento editorial;
- recorte retangular;
- sem moldura circular obrigatória;
- sem filtros extremos;
- sem alterar identidade;
- sem IA para mudar aparência.

Ela pode ser menor que o título principal.

O trabalho deve continuar protagonista.

---

# 31. SEO e estrutura técnica

Manter todos os requisitos da versão V2:

- title;
- meta description;
- Open Graph;
- canonical quando adequado;
- favicon;
- sitemap quando aplicável;
- robots;
- Google verification;
- HTML semântico.

---

# 32. Git

Não executar sem autorização:

```text
git commit
git push
git tag
deploy
```

Trabalhar apenas localmente.

---

# 33. Comparação com a versão clean

Ao finalizar, a versão bold deve continuar com a mesma credibilidade da V2 clean.

Pergunta de controle:

> A ousadia ajudou a comunicar melhor os projetos ou apenas adicionou decoração?

Se for apenas decoração, simplifique.

---

# 34. Critérios de sucesso visual

A página deve ter pelo menos três momentos visualmente memoráveis:

### 1. Hero
Grande composição tipográfica.

### 2. Equilibrium
Screenshot e case com peso visual claro.

### 3. Transição Work → Experience
Mudança forte de ritmo/superfície.

Não é necessário que todas as seções sejam visualmente complexas.

---

# 35. Critério de sucesso profissional

Mesmo com direção visual mais autoral, um recrutador deve conseguir responder rapidamente:

1. Quem é Antonio?
2. Qual seu foco?
3. Onde trabalha?
4. O que construiu?
5. Por que Equilibrium é relevante?
6. Quais tecnologias utiliza?
7. Onde está o GitHub?
8. Como entrar em contato?

A personalidade visual nunca deve competir com essas respostas.

---

# 36. Relatório final

Ao finalizar, informe:

### Conceito
Como a versão bold difere da versão clean.

### Layout
Principais decisões de composição.

### Tipografia
Como a hierarquia foi construída.

### Projetos
Como o Equilibrium ganhou protagonismo.

### Movimento
Quais interações foram implementadas.

### Responsividade
Como a composição se adapta ao mobile.

### Acessibilidade
O que foi validado.

### Performance
Dependências e otimizações.

### Arquivos
Criados, alterados ou removidos.

### Pendências
Somente itens realmente não resolvidos.

---

# 37. Regras finais

- leia `PORTFOLIO_V2_CONTEXT.md`;
- preserve fatos;
- preserve hierarquia dos projetos;
- Equilibrium continua sendo o protagonista;
- Orbit continua fora;
- não invente métricas;
- não invente screenshots;
- não invente URLs;
- não invente resultados;
- não use efeitos para esconder conteúdo fraco;
- não use framework sem necessidade;
- não use scroll hijacking;
- não use glow/neon;
- não crie estética gamer;
- não transformar tudo em cards;
- não transformar tudo em animação;
- não executar commit/push/deploy;
- priorizar composição, tipografia e evidência real.

A versão ousada deve parecer:

> um portfólio editorial contemporâneo de um desenvolvedor de software que pensa em produto, engenharia e experiência — não um template de desenvolvedor decorado com efeitos.
