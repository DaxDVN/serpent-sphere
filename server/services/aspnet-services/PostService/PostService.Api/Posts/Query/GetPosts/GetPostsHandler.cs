namespace PostService.Api.Posts.Query.GetPosts;

public record GetPostsQuery(
    int? PageNumber = 1,
    int? PageSize = 3)
    : IQuery<GetPostsResult>;

public record GetPostsResult(IEnumerable<Post> Posts);

public class GetPostsHandler(IDocumentSession session) : IQueryHandler<GetPostsQuery, GetPostsResult>
{
    public async Task<GetPostsResult> Handle(GetPostsQuery request, CancellationToken cancellationToken)
    {
        var posts = await session.Query<Post>().ToListAsync(token: cancellationToken);
        var test = posts.ToList();
        return new GetPostsResult(test);
    }
}