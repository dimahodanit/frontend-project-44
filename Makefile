#установка npm пакетов при клонировании репозитория. npm ci расшифровывается как "clean install", поскольку при её выполнении NPM полностью удаляет директорию node_modules и загружает все зависимости "с чистого листа"
install:
	 npm ci 

brain-games: #запуск приложения brain-games
	node bin/brain-games.js

publish:  #отладка публикации в npm репозиторий, пакет не будет опубликован, но мы увидим что он будет в себя включать
	npm publish --dry-run

lint:  #запуск линтера
	npx eslint . 

lint-fix:  #исправление ошибок линтера
	npx eslint --fix .  

brain-even: #запуск игры brain-even
	node bin/brain-even.js 

brain-calc: #запуск игры brain-calc
	node bin/brain-calc.js 

brain-gcd: #запуск игры brain-gcd
	node bin/brain-gcd.js 

brain-progression: #запуск игры brain-progression
	node bin/brain-progression.js 

brain-prime: #запуск игры brain-prime
	node bin/brain-prime.js



