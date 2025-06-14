using Microsoft.AspNetCore.Mvc;
using MusicPlayer.Server.Models;
using System.IO;

namespace MusicPlayer.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class SongsController : ControllerBase
    {


        private static readonly IEnumerable<SongModel> Songs = new[]
        {

            new SongModel
            { Id = 1, Title = "Menu Theme", Artist = "Myself", Genre = "Electronic", ReleaseDate = new DateTime(2024, 12, 12), MusicId = 1, CoverId = 1
            }
        };

        [HttpGet]
        public SongModel[] Get()
        {
            SongModel[] songs = Songs.ToArray();
            //System.Threading.Thread.Sleep(2000);
            return songs;
        }


    }
}
