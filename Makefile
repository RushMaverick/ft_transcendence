
all:
	@echo "Starting the dev containers"
	cd ./frontend && npm install && npm run build
	cd ./frontend && mkdir ./dist/static/ && cp -R ./static/translations ./dist/static/translations && cp -R ./static/js/views/gameCanvas/fonts ./dist/static/fonts
	docker compose -f docker-compose.yml build
	docker compose -f docker-compose.yml up -d

clean:
	@echo "Removing images, volumes & networks"
	docker compose -f docker-compose.yml down --rmi all -v

fclean: clean
	docker system prune -f

re: fclean all

.PHONY: all clean fclean re
