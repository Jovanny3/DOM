# Documentação do Projeto JavaScript DOM

## Visão Geral
Este projeto é uma aplicação web interativa que demonstra várias funcionalidades do DOM (Document Object Model) usando JavaScript vanilla. Ele inclui um menu hambúrguer, relógio digital, alarme, eventos de teclado, contador regressivo, botão de voltar ao topo e um modo escuro.

## Estrutura de Arquivos
1. `index.js` - Arquivo principal que importa e inicializa todos os módulos
2. `menu_hamburguesa.js` - Implementação do menu hambúrguer
3. `relogio_digital.js` - Funcionalidades de relógio digital e alarme
4. `eventos_teclado.js` - Manipulação de eventos de teclado
5. `contagem_regressiva.js` - Implementação do contador regressivo
6. `botton_scroll.js` - Funcionalidade do botão de voltar ao topo
7. `dark_mode.js` - Implementação do modo escuro
8. `style.css` - Estilos CSS para a aplicação
9. `index.html` - Estrutura HTML da página (não fornecida, mas referenciada no código)

## Documentação Detalhada dos Componentes

### 1. Menu Hambúrguer (`menu_hamburguesa.js`)
Este módulo cria um menu hambúrguer responsivo.

#### Função:
- `hamburgerMenu(panelBtn, panel, menuLink)`: Gerencia a funcionalidade do menu hambúrguer.

#### Características:
- Alterna a visibilidade do painel de menu.
- Fecha o menu ao clicar em um link do menu.
- Usa delegação de eventos para eficiência.

  <img src="/assets/img/arquivo.gif"><img src="/assets/menuHamburguer.png">

### 2. Relógio Digital e Alarme (`relogio_digital.js`)
Este módulo implementa um relógio digital e uma função de alarme.

#### Funções:
- `relogioDigital(clock, btnPlay, btnStop)`: Gerencia a exibição do relógio digital.
- `alarme(sound, btnPlay, btnStop)`: Gerencia a funcionalidade do alarme.

#### Características:
- O relógio digital atualiza a cada segundo.
- O alarme pode ser ativado e desativado com controles de botão.
- Usa `setInterval` para atualização contínua do relógio.

### 3. Eventos de Teclado (`eventos_teclado.js`)
Este módulo lida com eventos de teclado para mover uma bola na tela e definir atalhos de teclado.

#### Funções:
- `moveBall(e, ball, stage)`: Move um elemento bola baseado nas teclas de seta pressionadas.
- `shortcuts(e)`: Define atalhos de teclado personalizados.

#### Características:
- Usa `switch` para detectar teclas de seta e mover a bola.
- Implementa limites de movimento dentro do palco.
- Define atalhos de teclado para funções específicas (alerta, confirmação, prompt).

### 4. Contador Regressivo (`contagem_regressiva.js`)
Este módulo cria um contador regressivo para uma data específica.

#### Função:
- `countdown(id, limitDate, finalMessage)`: Configura e gerencia o contador regressivo.

#### Características:
- Calcula e exibe dias, horas, minutos e segundos restantes.
- Atualiza a cada segundo usando `setInterval`.
- Exibe uma mensagem personalizada ao atingir a data limite.

### 5. Botão de Voltar ao Topo (`botton_scroll.js`)
Este módulo implementa um botão de voltar ao topo que aparece quando o usuário rola a página para baixo.

#### Função:
- `scrollTopButton(btn)`: Gerencia a visibilidade e funcionalidade do botão de voltar ao topo.

#### Características:
- Aparece quando a rolagem ultrapassa 600px do topo.
- Usa `scrollTo` para uma rolagem suave até o topo.

### 6. Modo Escuro (`dark_mode.js`)
Este módulo implementa uma funcionalidade de alternância entre modo claro e escuro.

#### Função:
- `darkMode(btn, classDark)`: Gerencia a alternância entre modos claro e escuro.

#### Características:
- Alterna entre ícones de sol e lua no botão.
- Aplica/remove uma classe CSS para elementos com atributo `data-dark`.
- Usa `localStorage` para persistir a preferência do usuário.

### 7. Arquivo Principal (`index.js`)
Este arquivo importa e inicializa todos os módulos da aplicação.

#### Características:
- Usa `addEventListener` com "DOMContentLoaded" para garantir que o DOM esteja pronto.
- Inicializa todas as funcionalidades: menu hambúrguer, relógio, alarme, contador, botão de rolagem e modo escuro.
- Configura eventos de teclado globais.

### 8. Estilos CSS (`style.css`)
Este arquivo contém todos os estilos para a aplicação.

#### Características:
- Define variáveis CSS para cores e fontes principais.
- Implementa estilos responsivos.
- Inclui animações e transições para melhorar a UX.
- Define estilos específicos para cada componente (menu, botões, modo escuro, etc.).

## Instruções de Uso

1. **Menu Hambúrguer**: 
   - Clique no botão do menu (canto inferior direito) para abrir/fechar.
   - Clique em um link do menu para navegar e fechar o menu.

2. **Relógio Digital e Alarme**:
   - Use os botões "ativar-relogio" e "desativar-relogio" para controlar o relógio.
   - Use os botões "ativar-alarme" e "desativar-alarme" para controlar o alarme.

3. **Eventos de Teclado**:
   - Use as setas do teclado para mover a bola dentro da área designada.
   - Use Ctrl+A para ver um alerta, Ctrl+C para uma confirmação, Ctrl+P para um prompt.

4. **Contador Regressivo**:
   - O contador para o Ano Novo de 2024 iniciará automaticamente.

5. **Botão de Voltar ao Topo**:
   - Aparecerá ao rolar para baixo. Clique para voltar ao topo da página.

6. **Modo Escuro**:
   - Clique no botão no canto inferior esquerdo para alternar entre modos claro e escuro.

## Notas para Desenvolvedores
- O projeto usa módulos ES6 para uma melhor organização do código.
- A manipulação do DOM é feita usando JavaScript vanilla, demonstrando boas práticas sem depender de frameworks.
- O código faz uso extensivo de delegação de eventos para eficiência.
- O uso de `localStorage` no modo escuro demonstra como persistir preferências do usuário.
- Os estilos CSS usam variáveis, facilitando a manutenção e possíveis temas futuros.
- Considere implementar testes unitários e melhorar a acessibilidade em futuras iterações.
