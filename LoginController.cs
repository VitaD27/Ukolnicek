using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Ukolnicek.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ukolnicek.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        // GET: api/values
        [HttpPost]
        [Route("Login")]
        public ActionResult Login(SubmitLoginModel p_Login)
        {
            return Json("Zavolano");
        }

        [HttpPost]
        [Route("CreateNewUser")]
        public ActionResult CreateNewUser(SubmitLoginModel p_Login)
        {
            return Json("Zavolano");
        }

        [HttpPost]
        [Route("ResetPassword")]
        public ActionResult ResetPassword(string p_Email)     
        {
            return Json("Zavolano");
        }
    }
}
