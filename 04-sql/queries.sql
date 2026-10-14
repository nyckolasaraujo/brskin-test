-- 1. Itens disponíveis, do mais barato ao mais caro (8 linhas; primeiro P250, último Karambit)
SELECT id, name, price
FROM items
WHERE available = TRUE
ORDER BY price ASC;

-- 2. Itens com preço entre 100 e 1000, inclusive (6 linhas)
SELECT *
FROM items
WHERE price BETWEEN 100 AND 1000;

-- 3. Quantidade de pedidos por usuário, INCLUINDO quem tem zero
-- (Ana 2, Bruno 1, Carla 1, Diego 0, Elisa 0)
-- dica: LEFT JOIN + COUNT(o.id) + GROUP BY
SELECT u.name, COUNT(o.id) AS total_pedidos
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- 4. Valor total de cada pedido (1 = 470, 2 = 430, 3 = 900, 4 = 120)
-- dica: SUM + GROUP BY
SELECT order_id, SUM(unit_price) AS valor_total
FROM order_items
GROUP BY order_id
ORDER BY order_id ASC;

-- 5. Item mais vendido, em quantidade de vezes (AK-47 | Redline, 2)
-- dica: COUNT + ORDER BY DESC + LIMIT 1
SELECT i.name, COUNT(oi.id) AS quantidade_vendas
FROM order_items oi
JOIN items i ON oi.item_id = i.id
GROUP BY i.id, i.name
ORDER BY quantidade_vendas DESC
LIMIT 1;

-- 6. Itens que nunca foram vendidos (6 linhas)
-- dica: LEFT JOIN ... WHERE oi.id IS NULL, ou NOT IN
SELECT i.id, i.name
FROM items i
LEFT JOIN order_items oi ON i.id = oi.item_id
WHERE oi.id IS NULL;

-- 7. Preço médio dos itens, arredondado para 2 casas (1969.30)
-- dica: AVG + ROUND
SELECT ROUND(AVG(price), 2) AS preco_medio
FROM items;

-- 8. Relatório completo: id do pedido, nome do cliente, nome do item, preço unitário e data (5 linhas)
-- dica: JOIN de orders, users, order_items e items
SELECT 
    o.id AS order_id,
    u.name AS cliente,
    i.name AS item,
    oi.unit_price,
    o.created_at AS data_pedido
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN order_items oi ON o.id = oi.order_id
JOIN items i ON oi.item_id = i.id;

-- Bônus:
-- 1. INSERT de um pedido para Diego comprando o item 8 dentro de uma transação
BEGIN;

-- Supondo que Diego é o user_id 4 e o preço do item 8 é consultado na tabela items
INSERT INTO orders (user_id, status) VALUES (4, 'paid') RETURNING id;

-- Insere o item 8 no pedido recém-criado (substitua o order_id pelo gerado acima)
INSERT INTO order_items (order_id, item_id, unit_price) 
VALUES (currval('orders_id_seq'), 8, (SELECT price FROM items WHERE id = 8));

COMMIT;


-- 2. UPDATE marcando o item 3 como indisponível
UPDATE items
SET available = FALSE
WHERE id = 3;


-- 3. DELETE que tente apagar o usuário 1
DELETE FROM users WHERE id = 1;

/*
EXPLICAÇÃO DO PORQUÊ O DELETE VAI FALHAR:
O comando DELETE falhará devido a uma restrição de Chave Estrangeira (Foreign Key Constraint / Foreign Key Violation).
O usuário com id = 1 possui pedidos vinculados na tabela `orders` (onde `orders.user_id` aponta para `users.id`). 
O banco de dados impede a exclusão de um registro pai enquanto existirem registros filhos dependentes dele, garantindo a integridade referencial dos dados.
*/