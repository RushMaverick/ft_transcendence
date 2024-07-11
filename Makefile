
all:
	@echo "Starting the dev containers"
	docker compose -f docker-compose.dev.yml build
	docker compose -f docker-compose.dev.yml up -d
	npm install --prefix ./frontend
	npm run dev --prefix ./frontend

dev:
	@echo "Starting the dev containers"
	docker compose -f docker-compose.dev.yml up -d
	# docker compose -f docker-compose.dev.yml logs -f

clean:
	@echo "Removing images, volumes & networks"
	docker compose -f docker-compose.dev.yml down --rmi all -v

fclean: clean
	docker system prune -f

re: fclean all

up:
	@echo "Starting the containers"
	docker compose -f docker-compose.dev.yml up -d


down:
	@echo "Stopping the containers"
	# docker compose down
	docker compose -f docker-compose.dev.yml down

ps:
	@echo "List of the containers running"
	docker compose -f docker-compose.dev.yml ps

vol:
	@echo "List of the volumes running"
	docker volume ls

net:
	@echo "List of the networks running"
	docker network ls

.PHONY: all dev clean fclean re up ps down vol net
