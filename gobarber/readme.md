# GoBarber

## Docker

### Postgres

```bash

docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

```

### mongo

```bash
docker run --name mongobarber -p 27017:27017 -d -t mongo
```

### redis

```bash
docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
```
