using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Wishlist.Desafio.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "Senha deve conter entre 5 e 255 caractéres.")]
        public string Email { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "Senha deve conter entre 5 e 255 caractéres.")]
        public string Senha { get; set; }
    }
}
