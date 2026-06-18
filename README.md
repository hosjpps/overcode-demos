# overcode-demos

Демо-лендинги для стоматологических клиник (overcode.agency). Статичный HTML, раздаётся через GitHub Pages.
**Проприетарно — см. [LICENSE](./LICENSE).**

## Возможности
- Набор готовых посадочных страниц под стоматологии (более 60 демо-вариантов).
- Каждый лендинг — самодостаточный `index.html` со своей дизайн-системой: типографика, цветовая палитра, анимации.
- Адаптивная вёрстка под мобильные и десктоп.
- Анимации появления и скролл-эффекты на GSAP + ScrollTrigger.
- SEO-разметка: осмысленные `title`/`description`, `noindex` на демо-страницах.
- Скрипты на Playwright для снятия скриншотов лендингов (`shot-sites.mjs`, `shot-recheck.mjs`).

## Стек
- HTML5, статическая вёрстка без сборки
- Tailwind CSS (CDN)
- GSAP + ScrollTrigger (анимации)
- Google Fonts
- GitHub Pages (хостинг)
- Playwright (скриншоты, Node.js / ESM)

## Структура
- `<имя-клиники>/index.html` — отдельный лендинг для каждой клиники (`dantist/`, `mandent/`, `mirzoyan/` и др.)
- `shot-sites.mjs`, `shot-recheck.mjs` — Playwright-скрипты для снятия скриншотов
- `.nojekyll` — отключение обработки Jekyll на GitHub Pages
- `LICENSE` — проприетарная лицензия

## Демки
- [Дантист](https://hosjpps.github.io/overcode-demos/dantist/) — стоматология, Южное Бутово
- [ManDent Clinic](https://hosjpps.github.io/overcode-demos/mandent/) — стоматология, Южное Бутово
- [Престиж Сервис](https://hosjpps.github.io/overcode-demos/prestizh/) — стоматология, Южное Бутово
- [Центр Геворга Мирзояна](https://hosjpps.github.io/overcode-demos/mirzoyan/) — стоматология, Гольяново
- [Стоматология на Серпуховской](https://hosjpps.github.io/overcode-demos/serpukhovskaya/) — стоматология, Серпуховская

Полный список лендингов — в каталогах репозитория.

## Запуск
Сборка не требуется — это статические страницы.

```bash
# открыть конкретную демку локально
open dantist/index.html

# либо поднять локальный сервер из корня репозитория
python3 -m http.server 8000
# затем открыть http://localhost:8000/dantist/
```

В продакшене страницы раздаются через GitHub Pages по адресу `https://hosjpps.github.io/overcode-demos/<имя-клиники>/`.
