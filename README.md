# Conecta Sobras

## ODS
ODS 2 (Fome Zero) e ODS 12 (Consumo Responsável)

## Problema
Toneladas de alimentos em bom estado são descartadas diariamente por restaurantes, padarias e mercados, enquanto parte da população enfrenta insegurança alimentar. A conexão entre quem tem sobras e quem precisa delas é feita de forma manual, lenta e informal.

## Público-alvo
Doadores: restaurantes, padarias, mercados e pessoas com excedente de alimentos.
Coletores: ONGs, cozinhas comunitárias, igrejas e famílias em vulnerabilidade.

## Proposta de Valor
Conectamos doadores e coletores de alimentos de forma rápida e gratuita, reduzindo o desperdício e transformando sobras em refeições. Cada quilo salvo equivale a cerca de 2 refeições completas.

## Benchmarking
1. Too Good To Go: app que vende sacolas surpresa de comida que sobraria. Positivo: simplicidade do cadastro. Negativo: cobra do comércio. Referência usada: fluxo simples de publicação.
2. Olio: compartilhamento de comida entre vizinhos. Positivo: gratuito e comunitário. Negativo: foco em vizinhos, não em empresas. Referência usada: listagem com fotos e detalhes.
3. Food Rescue Hero: logística de resgate de alimentos nos EUA. Positivo: rastreamento de coleta. Negativo: exige voluntários cadastrados. Referência usada: status da doação (disponível, reservada, coletada).
4. Mesa Brasil Sesc: rede logística de doação no Brasil. Positivo: rede consolidada. Negativo: processo burocrático e offline. Referência usada: foco em ONGs como coletoras.
5. Banco Alimentar: arrecadação e distribuição de alimentos. Positivo: alcance nacional. Negativo: não conecta doador direto ao coletor. Referência usada: painel de números de impacto.

## Requisitos

### Requisitos Funcionais
- RF01: O sistema deve permitir cadastrar um usuário como doador ou coletor.
- RF02: O sistema deve permitir publicar uma doação com alimento, tipo, quantidade, validade e horário de retirada.
- RF03: O sistema deve validar que a data de validade da doação não está no passado.
- RF04: O sistema deve listar as doações com busca por nome do alimento.
- RF05: O sistema deve filtrar as doações por status (disponível, reservada, coletada).
- RF06: O sistema deve filtrar as doações por tipo de alimento.
- RF07: O sistema deve permitir reservar uma doação disponível.
- RF08: O sistema deve permitir marcar uma doação reservada como coletada, com confirmação.
- RF09: O sistema deve exibir um painel de impacto com kg salvos e refeições geradas.
- RF10: O sistema deve exibir o histórico completo de doações.

### Requisitos Não Funcionais
- RNF01: A aplicação deve ser responsiva em telas de celular, tablet e desktop.
- RNF02: A interface deve seguir contraste adequado para acessibilidade.
- RNF03: A aplicação deve carregar em menos de 3 segundos.
- RNF04: O código deve estar organizado em componentes reutilizáveis.
- RNF05: As mensagens de erro devem ser claras e em português.
- RNF06: A navegação deve funcionar sem recarregar a página (SPA).
- RNF07: Os dados devem persistir no armazenamento local do navegador.
- RNF08: A aplicação deve funcionar nos principais navegadores modernos.
- RNF09: Os commits devem seguir o padrão convencional (feat, fix, docs, style).
- RNF10: A aplicação deve estar publicada e acessível por URL pública.

## User Stories
- Como doador, quero publicar uma doação com detalhes do alimento, para que coletores encontrem o que sobrou.
- Como doador, quero ver o horário de retirada na doação, para que o coletor saiba quando buscar.
- Como coletor, quero buscar doações por tipo de alimento, para que eu encontre o que minha ONG precisa.
- Como coletor, quero reservar uma doação, para que ninguém mais pegue antes de mim.
- Como coletor, quero marcar a doação como coletada, para que o histórico fique correto.
- Como usuário, quero ver o painel de impacto, para que eu entenda o resultado do projeto.
- Como usuário, quero navegar pelo menu, para que eu acesse qualquer página rapidamente.
- Como usuário, quero ver uma página 404 amigável, para que eu saiba quando o endereço está errado.
- Como doador, quero validação nos formulários, para que eu não publique dados incompletos.
- Como visitante, quero entender o problema na home, para que eu decida doar ou receber.

## Funcionalidades
- Cadastro de doador e coletor
- Publicação de doação com validação
- Lista de doações com busca e filtros
- Reserva e coleta de doações
- Painel de impacto com métricas
- Histórico completo de doações

## Tecnologias Utilizadas
React, Vite, Tailwind CSS, React Router, localStorage

## Framework Utilizado
React

## Como Executar
npm install
npm run dev

## Protótipo
[link do Figma]

## Aplicação
[link do deploy na Vercel]

## Processo de Desenvolvimento
Projeto organizado em branches main, develop e feature, com integrações periódicas e commits seguindo o padrão convencional.

## Integrantes
[preencher os 4 nomes]

## Inteligência Artificial
Ferramenta: ONE (Adapta)

Etapas onde a IA foi utilizada:
- Arquitetura: definição das rotas, páginas, componentes e do armazenamento local.
- Código: geração e revisão dos componentes React com Tailwind CSS.