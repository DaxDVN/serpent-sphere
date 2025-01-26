namespace PostService.Api.Posts.Query.GetPosts;

public record GetPostsRequest(
    int? PageNumber = 1,
    int? PageSize = 3);

public record GetPostsResponse(IEnumerable<Post> Posts);

public class GetPostsEndpoint : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        app.MapGet("/posts", async ([AsParameters] GetPostsRequest request, ISender sender) =>
            {
                var query = request.Adapt<GetPostsQuery>();
                var result = await sender.Send(query);

                var response = result.Adapt<GetPostsResponse>();
                return Results.Ok(response);
            })
            .WithName("GetPosts")
            .Produces<GetPostsResponse>()
            .ProducesProblem(StatusCodes.Status400BadRequest)
            .WithSummary("Get Posts")
            .WithDescription("Get Posts");
    }
}