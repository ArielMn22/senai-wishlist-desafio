using Senai.Wishlist.Desafio.Domains;
using Senai.Wishlist.Desafio.Interfaces;
using Senai.Wishlist.Desafio.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Wishlist.Desafio.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        public Usuarios BuscarUsuarioPorEmailESenha(LoginViewModel login)
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                return ctx.Usuarios.FirstOrDefault(x => x.Email == login.Email && x.Senha == login.Senha);
            }
        }

        public Usuarios BuscarUsuarioPorId(int id)
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                return ctx.Usuarios.Find(id);
            }
        }

        public void CadastrarUsuario(Usuarios usuario)
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                ctx.Usuarios.Add(usuario);
                ctx.SaveChanges();
            }
        }
    }
}
