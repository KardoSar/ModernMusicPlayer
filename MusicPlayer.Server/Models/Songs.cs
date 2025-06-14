namespace MusicPlayer.Server.Models
{
    public class SongModel
    {

        public int Id { get; set; }
        public required string Title { get; set; }
        public string? Artist { get; set; }
        public string? Genre { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public string? Album { get; set; }
        public int MusicId { get; set; }
        public int CoverId { get; set; }

    }
}
