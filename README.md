# E-Commerce Store with NodeJS (Original blog)
https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/

## Usage

To start the service, run the following command:
```shell
npm start
```

## Curls

curl --location 'http://localhost:3000/login' \
--header 'Content-Type: application/json' \
--data '{"username":"test2","password":"test"}'

curl --location 'http://localhost:3000/user/all' \
--header 'Authorization: Bearer testtoken'

## License
This project is licensed under the MIT License.




