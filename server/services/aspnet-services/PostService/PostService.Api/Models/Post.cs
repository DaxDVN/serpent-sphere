namespace PostService.Api.Models;

public class Post
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public required string Title { get; set; }
    public required string Content { get; set; }
    public List<string> Tags { get; set; } = [];
    public List<MediaItem> Media { get; set; } = [];
    public bool IsDeleted { get; set; } = false;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}