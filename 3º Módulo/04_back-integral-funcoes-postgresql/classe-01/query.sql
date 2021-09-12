-- AULA


-- select * from usuarios;
-- SELECT count(*) FROM usuarios;
-- SELECT count(*) FROM usuarios WHERE id > 50;

-- SELECT nome, email FROM usuarios;
-- SELECT nome || ' - ' || email FROM usuarios;
-- SELECT nome || ' - ' || email AS "nome e email" FROM usuarios;
-- SELECT concat(nome, ' - ', email) AS "nome e email" FROM usuarios;

-- SELECT * FROM usuarios;
-- SELECT avg(idade) AS média FROM usuarios;
-- SELECT round(avg(idade),2) AS média FROM usuarios;

-- SELECT idade FROM usuarios ORDER BY idade DESC LIMIT 1 ;
-- SELECT min(idade) FROM usuarios;
-- SELECT max(idade) AS "idade máxima" FROM usuarios;
-- SELECT max(cadastro) FROM usuarios;
-- SELECT min(cadastro) FROM usuarios;
-- SELECT max(nome) FROM usuarios;

-- SELECT * FROM usuarios;
-- SELECT sum(idade) FROM usuarios;

-- SELECT * FROM usuarios;
-- SELECT '123'::int;
-- SELECT '12.3'::float;
-- SELECT '2020-12-17 06:04:33'::date;
-- SELECT '2020-12-17 06:04:33'::time;
-- SELECT CAST('123' AS int);
-- SELECT CAST('12.3' AS float);
-- SELECT CAST('2020-12-17 06:04:33' AS date);
-- SELECT nome, CAST(cadastro AS timestamp) FROM usuarios;

-- SELECT * FROM agenda WHERE CAST(agendamento AS date) > NOW();
-- SELECT * FROM agenda WHERE CAST(agendamento AS timestamp) > NOW();

-- SELECT AGE('2021-05-12', '1995-05-19');
-- SELECT AGE('2021-05-12 12:00:00', '1995-05-19 10:00:00');
-- SELECT AGE('1995-05-19 10:00:00'::timestamp);
-- SELECT *, AGE(agendamento::timestamp) FROM agenda 

-- SELECT id || ' - ' || nome || ' - ' || telefone FROM usuarios ORDER BY id;
-- select * from usuarios;
-- SELECT COALESCE(1);
-- SELECT id || ' - ' || nome || ' - ' || COALESCE(telefone, 'NÃO POSSUI') FROM usuarios ORDER BY id;

-- select count(*) from usuarios GROUP BY idade;
-- select idade, count(*) from usuarios GROUP BY idade;
-- select * from usuarios where idade = 29;
-- select idade, count(*) from usuarios GROUP BY idade;
-- select CAST(cadastro AS date), count(*) from usuarios GROUP BY CAST(cadastro AS date) ORDER BY count(*) DESC;


---------------------------------------------------------------------------------------------
-- //Exercícios 

--1
-- SELECT count(medicamento) FROM farmacia;
--2
-- SELECT min(idade) FROM usuarios;
--3
-- SELECT max(idade) FROM usuarios;
--4
-- SELECT avg(idade) AS média FROM usuarios WHERE idade >= 18;
--5
-- SELECT sum(estoque) AS "Soma do estoque" FROM farmacia WHERE categoria = 'blue' OR categoria = 'black';
--6
-- SELECT categoria, sum(estoque) AS "Soma do estoque" FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;
--7
-- SELECT categoria, sum(estoque) AS "Soma do estoque" FROM farmacia WHERE categoria IS NULL GROUP BY categoria;
--8
-- SELECT categoria, count(*) FROM farmacia WHERE categoria IS NULL GROUP BY categoria;
--9
-- SELECT concat(medicamento,' (', categoria,')') FROM farmacia WHERE categoria IS NOT NULL;
--10
-- SELECT concat(id,' - ', medicamento,' (',COALESCE(categoria, 'sem categoria'),')') FROM farmacia ORDER BY id;
--11
-- SELECT nome, idade, CAST(cadastro AS date) FROM usuarios WHERE CAST(cadastro AS date) < CAST('2021-01-01 00:00:00' AS date) ORDER BY cadastro DESC;
--12
-- SELECT nome, idade, email, AGE(cadastro::timestamp) AS Tempo FROM usuarios WHERE idade < 18;
--13
-- SELECT nome, idade, email, AGE(cadastro::date) AS Tempo FROM usuarios WHERE idade >= 60;
--14
-- SELECT categoria, count(*) FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria ;
--15
-- SELECT idade, count(*) FROM usuarios WHERE idade >= 18 GROUP BY idade ORDER BY idade;
--16
SELECT categoria, SUM(estoque) FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria LIMIT 3;
 
























