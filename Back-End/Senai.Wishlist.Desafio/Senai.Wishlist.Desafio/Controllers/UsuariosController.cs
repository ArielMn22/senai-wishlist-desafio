using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Wishlist.Desafio.Interfaces;

namespace Senai.Wishlist.Desafio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UsuariosController : ControllerBase
    {
        //private IUsuarioRepository UsuarioRepository { get; set; }

        //public UsuariosController()
        //{
        //    UsuarioRepository = new UsuarioRepository();
        //}

        [HttpPost]
        //[Authorize]
        public IActionResult CadastrarUsuario()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    mensagem = "Erro: " + ex
                });
            }
        }
    }
}