using Senai.Wishlist.Desafio.Domains;
using Senai.Wishlist.Desafio.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Wishlist.Desafio.Repositories
{
    public class VerboRepository : IVerboRepository
    {
        public List<Verbos> ListarTodosVerbos()
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                return ctx.Verbos.ToList();
            }
        }
    }
}
