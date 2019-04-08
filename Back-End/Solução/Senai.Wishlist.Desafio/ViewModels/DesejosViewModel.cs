using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Wishlist.Desafio.ViewModels
{
    public class DesejosViewModel
    {
        public int Id { get; set; }
        public int? IdVerbo { get; set; }
        public string Descricao { get; set; }
        public DateTime DataCriacao { get; set; }
        public int? IdUsuario { get; set; }

        public string UsuarioNome { get; set; }
        public string VerboNome { get; set; }
    }
}
