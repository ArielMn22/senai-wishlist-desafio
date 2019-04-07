USE WISHLIST_DESAFIO;

INSERT INTO VERBOS
VALUES   ('Comprar'),('Ganhar'),('Viajar')
		,('Morar'),('Outros'),('Sem categoria')

INSERT INTO USUARIOS (NOME, EMAIL, SENHA)
VALUES   ('Ariel','ariel@gmail.com','ariel')
		,('Cândida','candida@gmail.com','candida')
		,('Enzo','enzo@gmail.com','enzo')

INSERT INTO DESEJOS (ID_VERBO, DESCRICAO, DATA_CRIACAO, ID_USUARIO)
VALUES   ('1','Comprar PC da NASA.','07/04/2019','1')
		,('6','Não sei o que desejar!','06/04/2019','2')
		,('5','Ser famoso.','05/10/2018','3')


SELECT * FROM VERBOS
SELECT * FROM USUARIOS
SELECT * FROM DESEJOS