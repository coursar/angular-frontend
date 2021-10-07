1. Идентификация (email, phone, ...)
2. Аутентификация (password, sms, pin)
--- узнали, кто такой субъект
3. Авторизация
--- разрешаем или запрещаем доступ конкретного субъекта к объекту

HTTP (stateless) -> request/response
Http Basic: Authorization base64(username:password)

1. Credentials (principal + secret) -> token
2. Token -> (not expire)

LocalStorage/SessionStorage (token)

/accounts/<subject_account>/cards/<card_id>
1. Ролевой
2. Дискреционный (владелец и создатель) - Google Docs

Субъект - активная сущность
Объект - пассивная сущность

Доступ: чтение, изменение, удаление

1. Конфиденциальность
2. Доступность
3. Целостность
