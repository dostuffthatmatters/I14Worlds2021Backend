# API Documentation

### Login API

The authentication of users is done by passing every user an API Key after he provides valid login credentials. You have to send this API Key with every API request and in every response you get a new API key. So every key is only valid for one request.



POST Request to login:

```json
POST /backend/login

body: {
	email: "..."
  password: "..."
}
```

Response:

```json
{
  Status: "Ok"
	api_key: "..."
  name: "..."
}
```



If you want to manually renewn your API Key (e.g. automatic login on launch with remembered email/API Key)



### API Endpoints:

