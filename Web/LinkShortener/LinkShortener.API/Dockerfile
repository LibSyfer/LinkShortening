#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["LinkShortener.API/LinkShortener.API.csproj", "LinkShortener.API/"]
COPY ["LinkShortener.Application/LinkShortener.Application.csproj", "LinkShortener.Application/"]
COPY ["LinkShortener.Domain/LinkShortener.Domain.csproj", "LinkShortener.Domain/"]
COPY ["LinkShortener.Infrastructure/LinkShortener.Infrastructure.csproj", "LinkShortener.Infrastructure/"]
COPY ["LinkShortener.Persistence/LinkShortener.Persistence.csproj", "LinkShortener.Persistence/"]
RUN dotnet restore "./LinkShortener.API/LinkShortener.API.csproj"
COPY . .
WORKDIR "/src/LinkShortener.API"
RUN dotnet build "./LinkShortener.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./LinkShortener.API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "LinkShortener.API.dll"]