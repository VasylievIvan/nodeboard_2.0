docker run --name nodeboard-postgres -p 5432:5432 -e POSTGRES_PASSWORD=password123 -v ./sql/init.sql:/docker-entrypoint-initdb.d/init.sql --rm -d postgres
docker compose --env-file ./.env up