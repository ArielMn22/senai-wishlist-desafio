using Senai.Wishlist.Desafio.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Wishlist.Desafio.Interfaces
{
    public interface IDesejoRepository
    {
        /// <summary>
        /// Lista todos os desejos cadastrados no sistema.
        /// </summary>
        /// <returns>List<Desejos></returns>
        List<Desejos> ListarTodosDesejos();

        /// <summary>
        /// Lista os desejos que contêm o verbo passado por parâmetro.
        /// </summary>
        /// <param name="verboNome">Nome do verbo à ser listado</param>
        /// <returns>List<Desejos></returns>
        List<Desejos> ListarDesejosPorVerbo(string verboNome);

        /// <summary>
        /// Lista os desejos relacionados à um usuário.
        /// </summary>
        /// <param name="usuarioNome">Nome do usuário</param>
        /// <returns>List<Desejos></returns>
        List<Desejos> ListarDesejosPorNomeUsuario(string usuarioNome);

        /// <summary>
        /// Cadastra um desejo.
        /// </summary>
        void CadastrarDesejo(Desejos desejo);
    }
}
