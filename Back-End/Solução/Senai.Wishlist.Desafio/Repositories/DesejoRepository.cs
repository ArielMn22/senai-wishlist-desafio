using Microsoft.EntityFrameworkCore;
using Senai.Wishlist.Desafio.Domains;
using Senai.Wishlist.Desafio.Interfaces;
using Senai.Wishlist.Desafio.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Wishlist.Desafio.Repositories
{
    public class DesejoRepository : IDesejoRepository
    {
        public void AtualizarDesejo(Desejos desejoCadastrado, Desejos desejoNovo)
        {
            if (desejoNovo.Descricao != null)
            {
                desejoCadastrado.Descricao = desejoNovo.Descricao;
            }

            desejoCadastrado.DataCriacao = DateTime.Now;

            using (WishlistContext ctx = new WishlistContext())
            {
                ctx.Desejos.Update(desejoCadastrado);
                ctx.SaveChanges();
            }
        }

        public Desejos BuscarDesejoPorId(int id)
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                return ctx.Desejos
                    .Include(x => x.IdUsuarioNavigation)
                    .FirstOrDefault(x => x.Id == id);
            }
        }

        public void CadastrarDesejo(Desejos desejo)
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                ctx.Desejos.Add(desejo);
                ctx.SaveChanges();
            }
        }

        public void DeletarDesejo(Desejos desejo)
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                ctx.Desejos.Remove(desejo);
                ctx.SaveChanges();
            }
        }

        public List<DesejosViewModel> ListarDesejosPorNomeUsuario(string usuarioNome)
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                return TranformarEmDesejosViewModel(ctx.Desejos
                                                    .Where(x => x.IdUsuarioNavigation.Nome == usuarioNome)
                                                    .Include(x => x.IdVerboNavigation)
                                                    .Include(x => x.IdUsuarioNavigation)
                                                    .ToList());
            }
        }

        public List<DesejosViewModel> ListarDesejosPorVerbo(string verboNome)
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                return TranformarEmDesejosViewModel(ctx.Desejos
                                                    .Where(x => x.IdVerboNavigation.Nome == verboNome)
                                                    .Include(x => x.IdUsuarioNavigation)
                                                    .ToList());
            }
        }

        public List<DesejosViewModel> ListarTodosDesejos()
        {
            using (WishlistContext ctx = new WishlistContext())
            {
                return TranformarEmDesejosViewModel(ctx.Desejos
                                                    .Include(x => x.IdUsuarioNavigation)
                                                    .Include(x => x.IdVerboNavigation)
                                                    .ToList());
            }
        }

        public List<DesejosViewModel> TranformarEmDesejosViewModel(List<Desejos> desejos)
        {
            List<DesejosViewModel> desejosViewModel = new List<DesejosViewModel>();

            foreach (Desejos desejo in desejos)
            {
                DesejosViewModel desejoViewModel = new DesejosViewModel
                {
                    Id = desejo.Id,
                    IdVerbo = desejo.IdVerbo,
                    Descricao = desejo.Descricao,
                    DataCriacao = desejo.DataCriacao,
                    IdUsuario = desejo.IdUsuario,
                    UsuarioNome = desejo.IdUsuarioNavigation.Nome,
                    VerboNome = desejo.IdVerboNavigation.Nome
                };

                desejosViewModel.Add(desejoViewModel);
            }

            return desejosViewModel;
        }
    }
}
