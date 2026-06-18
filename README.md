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
- `<имя-клиники>/index.html` — отдельный лендинг для каждой клиники (`dantist/`, `apeks/`, `alfa-dent/` и др.)
- у части клиник несколько страниц по направлениям (`dentelit/terapiya.html`, `dentelit/hirurgiya.html` и т.д.)
- `shot-sites.mjs`, `shot-recheck.mjs` — Playwright-скрипты для снятия скриншотов
- `.nojekyll` — отключение обработки Jekyll на GitHub Pages
- `LICENSE` — проприетарная лицензия

## Демки
- [Дантист](https://hosjpps.github.io/overcode-demos/dantist/)
- [Апекс](https://hosjpps.github.io/overcode-demos/apeks/)
- [Альфа-Дент](https://hosjpps.github.io/overcode-demos/alfa-dent/)
- [Grand Clinic](https://hosjpps.github.io/overcode-demos/grand-clinic/)
- [ДентЭлит](https://hosjpps.github.io/overcode-demos/dentelit/)
- [Via Dent](https://hosjpps.github.io/overcode-demos/via-dent/)
- [Ирида](https://hosjpps.github.io/overcode-demos/irida/)
- [StomCity](https://hosjpps.github.io/overcode-demos/stomcity/)

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
