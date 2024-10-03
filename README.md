# DogSearch

![example workflow](https://github.com/Kate-Raevskaya/aston-react/actions/workflows/workflow.yml/badge.svg)

- Приложение для поиска пород собак
- [Посмотреть проект](https://dogs-search-rosy.vercel.app/)
- Используемое API [Dog API](https://thedogapi.com/?utm_source=thecatapi&utm_medium=website&utm_campaign=x-pollination)

## Реализованы следующие требования к функциональности:

- [x] Реализованы Требования к функциональности
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется LocalStorage

#### React

- [x] Пишем функциональные компоненты с хуками в приоритете над классовыми
- [x] Есть разделение на [умные](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/components/SearchField/SearchField.tsx) и [глупые](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/components/Buttons/FavoriteButton.tsx) компоненты
- [x] Есть рендеринг [списков](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/components/BreedsContainer/BreedsContainer.tsx)
- [x] Реализована хотя бы одна [форма](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/components/AuthForm/AuthForm.tsx)
- [x] Есть применение [Контекст API](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/context/ThemeContext.tsx)
- [x] Есть применение [предохранителя](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/App.tsx)
- [x] Есть хотя бы один кастомный [хук](https://github.com/Kate-Raevskaya/aston-react/tree/main/src/hooks)
- [x] Хотя бы несколько компонентов используют PropTypes:[DogCard](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/components/DogCard/DogCard.tsx), [SearchField](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/components/SearchField/SearchField.tsx)
- [x] Поиск не должен триггерить много запросов к серверу [Debounce](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/components/SearchField/SearchField.tsx#L24)
- [x] Есть применение [lazy](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/router/router.tsx) + [Suspense](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/App.tsx)

#### Redux

- [x] Используем Modern [Redux with Redux Toolkit](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/store/store.ts)
- [x] Используем [слайсы](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/store/store.ts)
- [x] Есть хотя бы одна кастомная [мидлвара](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/store/middlewares.ts)
- [x] Используется [RTK Query](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/store/apiSlice.ts)
- [x] Используется [Transforming Responses](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/store/apiSlice.ts)

### 2 уровень (необязательный)

- [x] Используeтся TypeScript
- [x] Настроен CI/CD
- [x] Низкая связанность клиентского кода с хранилищем. Напрямую работа с LocalStorage происходит в отдельном [месте в приложении](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/api/user-api.ts), клиентский код не знает о типе хранилища
- [x] Связь UI и бизнес-логики построена не через команды, а через события. Компонент AuthForm порождает [событие](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/components/AuthForm/AuthForm.tsx#L30), а страницы [SignupPage](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/pages/singup/SignupPage.tsx#L31) и [SigninPage](https://github.com/Kate-Raevskaya/aston-react/blob/main/src/pages/signin/SigninPage.tsx#L29) реагируют на него