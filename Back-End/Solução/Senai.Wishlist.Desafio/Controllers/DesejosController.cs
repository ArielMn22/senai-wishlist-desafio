using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Wishlist.Desafio.Domains;
using Senai.Wishlist.Desafio.Interfaces;
using Senai.Wishlist.Desafio.Repositories;

namespace Senai.Wishlist.Desafio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class DesejosController : ControllerBase
    {
        private IDesejoRepository DesejoRepository { get; set; }

        public DesejosController()
        {
            DesejoRepository = new DesejoRepository();
        }

        [HttpGet]
        [Authorize]
        public IActionResult ListarDesejos()
        {
            try
            {
                return Ok(DesejoRepository.ListarTodosDesejos());
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    mensagem = "Erro: " + ex
                });
            }
        }

        [HttpGet("verbo/{verboNome}")]
        [Authorize]
        public IActionResult ListarPorNomeVerbo(string verboNome)
        {
            try
            {
                return Ok(DesejoRepository.ListarDesejosPorVerbo(verboNome));
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    mensagem = "Erro: " + ex
                });
            }
        }

        [HttpGet("usuario/{usuarioNome}")]
        [Authorize]
        public IActionResult ListarPorNomeUsuario(string usuarioNome)
        {
            try
            {
                return Ok(DesejoRepository.ListarDesejosPorNomeUsuario(usuarioNome));
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    mensagem = "Erro: " + ex
                });
            }
        }

        [HttpPost]
        [Authorize]
        public IActionResult CadastrarDesejo(Desejos desejo)
        {
            try
            {
                DesejoRepository.CadastrarDesejo(desejo);

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