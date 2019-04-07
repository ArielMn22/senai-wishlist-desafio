# senai-wishlist-desafio
Criado para guardar os códigos referentes ao desafio proposto pelos professores durante o curso Técnico de Desenvolvimento de Sistemas.

#Comando Scaffold - Usuário SA
Scaffold-DbContext "Data Source=.\SqlExpress; Initial Catalog=WISHLIST_DESAFIO; user id=sa; pwd=132" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Domains -ContextDir Contexts -Context WishlistContext

#Comando Scaffold - Integrated Security
Scaffold-DbContext "Data Source=.\SqlExpress; Initial Catalog=WISHLIST_DESAFIO; integrated security=true" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Domains -ContextDir Contexts -Context WishlistContext