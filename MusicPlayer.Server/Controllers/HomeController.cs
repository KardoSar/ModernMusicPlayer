using Microsoft.AspNetCore.Mvc;

namespace MusicPlayer.Server.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
