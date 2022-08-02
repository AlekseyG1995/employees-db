# Employee DB (test frontend task)

<details>
<summary><b>Описание тестового задания</b>(под катом)</summary>
Необходимо разработать одностраничное приложение для возможности просмотра и редактирования данных сотрудников компании. Внешний вид приложения зависит от вас. Верстка должна быть адаптивной и корректно отображаться на разных устройствах.
Ниже описан формат данных.


```
"id": 1,
"name": "Иван Иванов",
"isArchive": false,
"role": "tester",
"phone": "+7 (900) 123-4567",
"birthday": "01.01.1990"
```

_Логика работы_
1. При открытии приложения мы должны увидеть список сотрудников и форму для их фильтрации. У каждого из сотрудников в списке должны отображаться его имя, должность и номер телефона. Должность - выпадающий список, содержащий (Frontend, Backend, Tester). Статус - чекбокс с лейблом "в архиве".
2. При нажатии в списке на одного из сотрудников должна появиться страница с формой редактирования данных сотрудника. Форма редактирования должна иметь поля: имя сотрудника - текстовое поле, телефон - текстовое поле с маской, дата рождения - текстовое поле с маской, должность - выпадающий список, содержащий (Frontend, Backend, Tester), статус - чекбокс с лейблом "в архиве".
3. Приложение должно предусматривать добавление новых сотрудников в систему.
4. Приложение так же должно поддерживать роутинг (browser history).

_Требуемые технологии_
1. Фронтенд фреймворк - ReactJS. Роутер - react-router, либо любой другой подходящий для вас (можно свой).  Если не знаете react, то можете взять любой другой фреймворк.
2. Применение css препроцессоров SASS (SCSS), PostCss, ...
3. CSS фреймворк на ваше усмотрение.
4. Большим плюсом будет использование в разработке webpack, webpack hot module replacement.
5. Использовать Redux при разработке.

_Требования к исходному коду_
 1. Код должен быть легко читаем.
 2. Особых требований к структуре проекта не предъявляется, требуется лишь чтобы присутствовала разбивка на модули.
 3. Приложение должно быть устойчиво к ошибкам пользователя и выдавать понятные и информативные сообщения об ошибках.
 4. Приложение должно поддерживать протоколирование (в консоль) основных событий, отладочных событий и сообщений об ошибках.
</details>

## О запуске проекта

- запуск проекта
  - без установки окружения, используя _Docker_ (Dockerfile присутствует)
  - установив необходимое окружение локально
    1. `npm install`
    2. `npm run jsonserver` && `npm start`  (или `npm run dualdev`, используя _concurrently_)

> база с тестовым набором данных находится в файле **db.json**

## О проекте

### Стек технологий

- **TypeScript**
- **React** 
  - react-hook-form
  - react-router-dom
  - react-imask
  - react-error-boundary
- **RTK Query**
- **Taliwind** + SCSS
- **Eslint**
- **Docker**

В качестве backend используется **Json-server**

### Внешний вид

- главная страница

![image](https://user-images.githubusercontent.com/107615724/182362567-e4e6593b-0ef5-48e5-842d-69a901ed8d0a.png)

- добавление 

![image](https://user-images.githubusercontent.com/107615724/182362921-0fe19644-7c95-4eea-ab11-0ada775f51bf.png)

- редактирование

![image](https://user-images.githubusercontent.com/107615724/182363094-43499d39-41c0-4aa5-9cd6-af7489d6d9f2.png)



