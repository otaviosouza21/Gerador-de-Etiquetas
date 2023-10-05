# Gerador de Etiquetas Internas

## Visão Geral
Este é um guia de instruções para o aplicativo de integração com a API do Trello, conhecido como "Gerador de Etiquetas Internas." Este aplicativo foi desenvolvido para simplificar o gerenciamento de pedidos, especialmente aqueles que estão na fase de separação e envio. Ele se integra diretamente com a API do Trello, permitindo que você acesse informações dos pedidos de forma rápida e eficaz, além de permitir a geração de etiquetas para esses pedidos e a emissão de etiquetas de produtos a partir de um arquivo CSV.

## Configuração
Antes de começar a usar o aplicativo, é necessário configurá-lo corretamente:

### Chave da API do Trello
Você precisará obter uma chave de API do Trello para se autenticar. Para obter a chave da API, siga as instruções no site oficial do Trello.

### Token de Acesso do Trello
Após obter a chave da API, é necessário gerar um token de acesso para seu aplicativo. Siga as instruções no site oficial do Trello para obter o token.

### Configurações do Card
Para o funcionamento correto do aplicativo, será necessário inserir o título do card exatamente como é proposto abaixo:

`PV - (NÚMERO DO PEDIDO) - (CÓDIGO DO CLIENTE) - (NOME DO CLIENTE)`

## Uso
O aplicativo é projetado para ser fácil de usar:

1. **Listar Pedidos de Separação:** Ao acessar o aplicativo, você verá uma opção para listar os pedidos que estão no status de separação. Clique nessa opção.

2. **Verificar Status Financeiro:** Para cada pedido listado, o aplicativo destacará se o status financeiro do pedido foi liberado.

3. **Selecionar Pedidos em Massa:** Marque os pedidos que deseja incluir na geração de etiquetas em massa.

4. **Gerar Etiquetas:** Após selecionar os pedidos, clique na opção "Gerar Etiquetas". Você poderá definir a quantidade de etiquetas para cada pedido e escolher o tipo de carga (por exemplo, caixa, saco ou amarrado).

5. **Emitir Etiquetas de Produtos:** Agora, no aplicativo, é possível emitir etiquetas de produtos. Para isso, importe um arquivo CSV que contenha o código, descrição e preço dos itens. Certifique-se de que as colunas na tabela estejam no formato padrão e escritas exatamente dessa forma: `CÓD. INTERNO / DESCRIÇÃO / VLR. VENDA (1)`.

## Contato
Se você tiver alguma dúvida, problema ou sugestão em relação ao aplicativo, não hesite em entrar em contato conosco:

- Email: otaviosouzalu@gmail.com

Esperamos que este aplicativo torne o gerenciamento de pedidos e a emissão de etiquetas de produtos mais eficientes e simplificados.
