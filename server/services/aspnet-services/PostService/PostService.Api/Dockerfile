# Sử dụng image ASP.NET để chạy ứng dụng
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

COPY ["services/aspnet-services/PostService/PostService.Api/PostService.Api.csproj", "PostService/PostService.Api/"]
COPY ["services/aspnet-services/Shared/Shared/Shared.csproj", "Shared/Shared/"]

RUN dotnet restore "PostService/PostService.Api/PostService.Api.csproj"

WORKDIR "/src/PostService/PostService.Api"
COPY . .


RUN dotnet build "PostService.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "PostService.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "PostService.Api.dll"]
