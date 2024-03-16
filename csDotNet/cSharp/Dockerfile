# FROM mcr.microsoft.com/dotnet/dotnetapp-8.0
# Official docker image of dotnet
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS base
# Set a name to the space we wokr
WORKDIR consoleapp

# To open ports
# EXPOSE 80
# EXPOSE {El puesto que utiliza la app}

# Copy the file "*.csproj" to the actual dir
COPY ./cSharp.csproj ./
# Execute the command "dotnet restore"
RUN dotnet restore 

# Copy all 
COPY . .
# Execute the command "dotnet publish -c Release -o out"
RUN dotnet publish -c Release -o out

# Official docker image of dotnet
FROM mcr.microsoft.com/dotnet/sdk:8.0
# Call the dir we are working
WORKDIR /consoleapp
# Copy from the 
COPY --from=base /consoleapp/out .
# command that will be executed when the image is executed
ENTRYPOINT ["dotnet", "cSharp.dll"]
