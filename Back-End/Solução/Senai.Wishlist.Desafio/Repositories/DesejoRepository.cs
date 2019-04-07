using Microsoft.EntityFrameworkCore;
using Senai.Wishlist.Desafio.Domains;
using Senai.Wishlist.Desafio.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Wishlist.Desafio.Repositories
{
    public class DesejoRepository : IDesejoRepository
    {
        public void CadastrarDesejo(Desejos desejo)
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                ctx.Desejos.Add(desejo);
                ctx.SaveChanges();
            }
        }

        public List<Desejos> ListarDesejosPorNomeUsuario(string usuarioNome)
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                return ctx.Desejos.Where(x => x.IdUsuarioNavigation.Nome == usuarioNome).Include(x => x.IdVerboNavigation).ToList();
            }
        }

        public List<Desejos> ListarDesejosPorVerbo(string verboNome)
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                return ctx.Desejos
                    .Where(x => x.IdVerboNavigation.Nome == verboNome)
                    .Include(x => x.IdUsuarioNavigation)
                    .ToList();
            }
        }

        public List<Desejos> ListarTodosDesejos()
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                return ctx.Desejos
                    .Include(x => x.IdUsuarioNavigation)
                    .Include(x => x.IdVerboNavigation)
                    .ToList();
            }
        }
    }
}
