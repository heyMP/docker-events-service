# Docker Events Microservice

This service will monitor all docker events and store them in a redis database.

## Usage

Example docker-compose.yml

```yml
version: '3'
services:
  docker-events:
    image: heymp/docker-events-service
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - REDIS_HOST: "redis-db"
  redis-db:
    image: redis:4.0.5-alpine
    command: ["redis-server", "--appendonly", "yes"]
    volumes:
      - redis-data:/data
volumes:
  redis-data:
```