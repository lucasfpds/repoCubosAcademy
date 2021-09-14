
DROP TABLE IF EXISTS produtos;

CREATE TABLE produtos (
	id serial,
  	nome varchar(60) NOT NULL UNIQUE,
  	descricao text,
  	preco integer NOT NULL,
  	categoria varchar(20) NOT NULL,
  	estoque integer NOT NULL,
  	ativo boolean DEFAULT TRUE,
  	data_cadastro timestamptz NOT NULL
);

ALTER TABLE produtos
ALTER COLUMN  data_cadastro
SET DEFAULT NOW();


INSERT INTO produtos (nome, descricao, preco, categoria, estoque, data_cadastro) 
VALUES ('Camisa Verde', 'Camisa linda na cor verde', 4990, 'Camisa', 23, '2021-05-21 15:38:10+5'),
('Camisa Azul', 'Camisa linda na cor azul de luxo', 4890, 'Camisa', 15, '2021-05-20 16:38:10+3');


INSERT INTO produtos (nome, descricao, preco, categoria, estoque) 
-- -- -- VALUES ('Camisa Verde', 'Camisa linda na cor verde', 4990, 'Camisa', 23, '2021-05-21 15:38:10+5'),
-- -- -- ('Camisa Azul', 'Camisa linda na cor azul de luxo', 4890, 'Camisa', 15, '2021-05-20 16:38:10+3'),
VALUES ('Camisa Laranja', 'Camisa linda na cor Laranja de luxo', 3890, 'Camisa', 11 ),
('Camisa Preta', 'Camisa linda na cor amarela de luxo', 5890, 'Camisa', 12 );

-- UPDATE produtos SET ativo = false, nome = 'Camisa Preta' WHERE id=4;



----------------------------------------------------------------------------------------------


-- 1
DROP TABLE IF EXISTS usuarios;

-- 2
CREATE TABLE usuarios (
	id serial,
  	nome text NOT NULL,
  	idade smallint,
  	email varchar(80) UNIQUE,
  	senha varchar(8) NOT NULL
);

-- 3
INSERT INTO usuarios (nome, idade, email, senha)
VALUES ('Aretha Montgomery', 30, 'augue.id.ante@odioAliquam.com', 'a0B13O3L'),
('Camden H. Bartlett', 15, 'turpis.vitae.purus@risusDuisa.ca', 'p3P96F3Q'),
('Raja W. Coffey', 30, 'raja.feugiat@nonummy.com', 's5F51T7L'),
('Elton D. Olsen', 29, 'auctor@duiFuscediam.edu', 'k5X25B0R'),
('Shelley E. Frederick', 20, 'Shelley@nonummy.com', 'u2D18F6E');

-- 4
UPDATE usuarios SET nome = 'Raja W. Coffey Thomas' WHERE email = 'raja.feugiat@nonummy.com';

-- 5
INSERT INTO usuarios (nome, idade, email, senha)
VALUES ('Jermaine G. Sellers',	16,'ligula.Nullam@tortordictum.co.uk', 'o2P56U9U'),
('James D. Kennedy',	23,'ametNulladignissim.com', 'q6B78V3V'),
('Amelia, S. Harris',	29,'nec.metus.facilisis@vitaealiquet.edu', 'l4S64Y3A'),
('Joel M. Hartman',	18,'montes.nascetur@odiotristique.co.uk', 'c4Q27D7O'),
('Elmo K. Greer',	18,'risus.Duis@eget.ca', 'e3P92I7R');

--6
ALTER TABLE usuarios
ADD COLUMN situacao boolean DEFAULT TRUE;

--7
UPDATE usuarios SET situacao = FALSE WHERE email = 'montes.nascetur@odiotristique.co.uk';

--8
UPDATE usuarios SET senha = 'k9P31H1O' WHERE email = 'risus.Duis@eget.ca';

--9
ALTER TABLE usuarios
DROP COLUMN idade;

ALTER TABLE usuarios
ADD COLUMN data_nascimento date;

--10
UPDATE usuarios SET data_nascimento = '1991-09-29' WHERE email = 'auctor@duiFuscediam.edu';
UPDATE usuarios FROM  SET data_nascimento = '1988-11-02' WHERE email = 'nec.metus.facilisis@vitaealiquet.edu';

--11
DELETE FROM usuarios WHERE data_nascimento IS NULL;

--12
ALTER TABLE usuarios
ALTER COLUMN data_nascimento 
SET NOT NULL;

UPDATE usuarios SET data_nascimento = NULL WHERE senha = 'k5X25B0R';

--13
INSERT INTO usuarios (nome, data_nascimento, email, senha)
VALUES ('Tate I. Dean', '1989-05-01', 'Nunc@etmagnis.edu', 'd3V25D6Y'),
('Arsenio K. Harmon', '1985-10-23', 'adipiscing.elit@turpis.''com', 'm3T58S0C');