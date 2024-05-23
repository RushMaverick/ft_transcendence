.PHONY: up down dev dev-down fclean

up:
	@echo "Starting the containers"
	docker compose up -d

down:
	@echo "Stopping the containers"
	docker compose down

dev:
	@echo "Starting the dev containers"
	docker compose -f docker-compose.dev.yml logs -f

dev-down:
	@echo "Stopping the dev containers"
	docker compose -f docker-compose.dev.yml down

fclean: stop
	@echo "Removing images"
	docker rmi ft_transcendence-dev
