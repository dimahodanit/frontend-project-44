#установка npm пакетов при клонировании репозитория. npm ci расшифровывается как "clean install", поскольку при её выполнении NPM полностью удаляет директорию node_modules и загружает все зависимости "с чистого листа"
install:
	 npm ci 

brain-games: #запуск приложения brain-games
	node bin/brain-games.js

publish:  #отладка публикации в npm репозиторий, пакет не будет опубликован, но мы увидим что он будет в себя включать
	npm publish --dry-run

lint: 
	npx eslint . #запуск линтера

brain-even: #запуск приложения brain-even
	node bin/brain-even.js 

brain-calc: #запуск приложения brain-calc
	node bin/brain-calc.js 
lint-fix:  #исправление ошибок линтера
	npx eslint --fix .  
