USE WISHLIST_DESAFIO;

INSERT INTO VERBOS
VALUES   ('Comprar'),('Ganhar'),('Viajar')
		,('Morar'),('Outros'),('Sem categoria')
		,('Querer'),('Vencer'),('Perder')

INSERT INTO USUARIOS (NOME, EMAIL, SENHA)
VALUES   ('Ariel','ariel@gmail.com','ariel')
		,('Cândida','candida@gmail.com','candida')
		,('Enzo','enzo@gmail.com','enzo')

INSERT INTO DESEJOS (ID_VERBO, DESCRICAO, DATA_CRIACAO, ID_USUARIO)
VALUES   ('1','Comprar PC da NASA.','07/04/2019','1')
		,('6','Não sei o que desejar!','06/04/2019','2')
		,('5','Ser famoso.','05/10/2018','3')
		,('1','Comprar um caminhão.','15/12/2018','1')
		,('1','Comprar um triciclo.','01/01/2017','2')
		,('3','Viajar para Ubatuba.','05/05/2017','3')


SELECT * FROM VERBOS
SELECT * FROM USUARIOS
SELECT * FROM DESEJOS



-----Sessão DELETE:-----
DELETE FROM DESEJOS
DELETE FROM USUARIOS
DELETE FROM VERBOS

DBCC CHECKIDENT('VERBOS', RESEED, 0)
DBCC CHECKIDENT('USUARIOS', RESEED, 0)
DBCC CHECKIDENT('DESEJOS', RESEED, 0)