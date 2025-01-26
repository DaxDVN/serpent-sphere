using Marten.Schema;

namespace PostService.Api.Data;

public class PostInitialData : IInitialData
{
    public async Task Populate(IDocumentStore store, CancellationToken cancellation)
    {
        await using var session = store.LightweightSession();

        if (!await session.Query<Post>().AnyAsync(token: cancellation))
            session.Store(GetPreconfiguredPosts());

        await session.SaveChangesAsync(cancellation);
    }

    private static IEnumerable<Post> GetPreconfiguredPosts()
    {
        return new List<Post>
        {
            new()
            {
                Id = new Guid("d1e0c8b2-865a-4b9f-9c58-cf5a0cc0f8b4"),
                UserId = new Guid("a1234567-89ab-cdef-0123-456789abcdef"),
                Title = "Exploring the World of AI",
                Content = "Artificial Intelligence is transforming industries worldwide.",
                Media = [new MediaItem { Url = "https://example.com/ai-image1.jpg", MediaType = "image/jpeg" }],
                Tags = ["AI", "MachineLearning", "Technology"],
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new()
            {
                Id = new Guid("f2a1b3c4-765d-4e3f-8123-9babcdef1234"),
                UserId = new Guid("b2345678-90ab-cdef-1234-56789abcdef0"),
                Title = "The Future of Web Development",
                Content = "React, Next.js, and ASP.NET are dominating web development trends.",
                Media = [new MediaItem { Url = "https://example.com/ai-image1.jpg", MediaType = "image/jpeg" }],
                Tags = ["WebDevelopment", "React", "NextJS", "DotNet"],
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new()
            {
                Id = new Guid("c3d4e5f6-4321-4bca-9def-a1b2c3d4e5f6"),
                UserId = new Guid("c3456789-01ab-cdef-2345-6789abcdef01"),
                Title = "Health & Fitness Tips",
                Content = "Staying fit requires consistency and balanced nutrition.",
                Media = [new MediaItem { Url = "https://example.com/ai-image1.jpg", MediaType = "image/jpeg" }],
                Tags = ["Fitness", "Health", "Workout"],
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new()
            {
                Id = new Guid("e6f7a8b9-5432-4cab-0fed-abcdef123456"),
                UserId = new Guid("d4567890-12ab-cdef-3456-789abcdef012"),
                Title = "Top Travel Destinations in 2025",
                Content = "Discover the most breathtaking places to visit in the coming year.",
                Media = [new MediaItem { Url = "https://example.com/ai-image1.jpg", MediaType = "image/jpeg" }],
                Tags = ["Travel", "Adventure", "Tourism"],
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new()
            {
                Id = new Guid("a1b2c3d4-6543-4bac-1fed-9876543210ab"),
                UserId = new Guid("e5678901-23ab-cdef-4567-89abcdef0123"),
                Title = "Mastering Docker for Microservices",
                Content = "Learn how Docker and Kubernetes can improve your microservices architecture.",
                Media = [new MediaItem { Url = "https://example.com/ai-image1.jpg", MediaType = "image/jpeg" }],
                Tags = ["Docker", "Kubernetes", "Microservices", "Cloud"],
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            }
        };
    }
}