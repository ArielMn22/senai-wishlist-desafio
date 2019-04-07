using Senai.Wishlist.Desafio.Domains;
using Senai.Wishlist.Desafio.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Wishlist.Desafio.Interfaces
{
    public interface IUsuarioRepository
    {
        /// <summary>
        /// Cadastra um usuário no sistema.
        /// </summary>
        /// <returns></returns>
        void CadastrarUsuario(Usuarios usuario);

        ///// <summary>
        ///// Busca um usuário por email e senha.
        ///// </summary>
        ///// <param name="login">LoginViewModel</param>
        ///// <returns>Um usuário caso encontre, caso contrário, nulo</returns>
        Usuarios BuscarUsuarioPorEmailESenha(LoginViewModel login);
    }
}
