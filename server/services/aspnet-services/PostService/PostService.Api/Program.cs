using PostService.Api.Data;

var builder = WebApplication.CreateBuilder(args);

if (builder.Environment.IsDevelopment())
{
    builder.Configuration.AddUserSecrets<Program>();
}

var assembly = typeof(Program).Assembly;

builder.Services.AddMediatR(config => { config.RegisterServicesFromAssembly(assembly); });

builder.Services.AddCarter();

builder
    .Services.AddMarten(opts =>
    {
        opts.Connection(builder.Configuration["Database"]!);
    })
    .UseLightweightSessions();

// builder.Services.AddStackExchangeRedisCache(opts =>
// {
//     opts.Configuration = builder.Configuration.GetConnectionString("Redis");
// });

if (builder.Environment.IsDevelopment())
    builder.Services.InitializeMartenWith<PostInitialData>();

var app = builder.Build();

app.MapCarter();

app.Run();