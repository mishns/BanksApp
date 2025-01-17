# Тестовое задание Banki.ru (frontend)

Основной frontend проект нашей команды — это страница выдачи кредитов с фильтром и сортировкой.
Тестовое задание приближено к ежедневным задачам нашей компании.
Прототипы макетов лежат в папке img, они носят рекомендательный характер.
Пример ответа backend лежит в mock.json, там есть информация о кредитных продуктах и фильтр.

## Условия

- Использовать React, Typescript
- При необходимости использовать webpack
- Использовать компоненты любой крупной библиотеки компонентов: bootstrap, material ui и тд
- Дать возможность сохранять результаты поиска на клиентской стороне и передавать эти результаты другим пользователям сервиса
- Реализовать фильтр продуктов по сумме, сумма указанная в фильтре это минимальная сумма, которую клиент хочет получить в кредит
- Изначально форма поиска не содержит фильтров и отображает все кредитные продукты. Количество продуктов не менее 5.
- Дать возможность отсортировать кредитные продукты по сумме: от большего к меньшему и наоборот.
- Работоспособность в последней версии Google Chrome
- Плюсом будут комментарии к коду, чтобы нам было проще оценить знания



## Install

```sh
npm install
```

For prod build:
```sh
npm install -g serve
```

## Usage

Dev mode:
```sh
npm run dev
```
Prod mode:
```sh
npm run duild-prod
npm run start-json-server
npx serve dist
```

## Author
* Github: [@mishns](https://github.com/mishns)
