# jwt-console-app
Nest application that generates a JWT with a payload and a secret.

how to test it: 

npx nestjs-command generate-jwt:payload '{"prueba1":"sub", "prueba":"prueba"}' secret "secreto"

returns: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcnVlYmExIjoic3ViIiwicHJ1ZWJhIjoicHJ1ZWJhIn0.cf90d367193916cc7adde85d82485c359b051ccc3dcc4cd59134ac76dd29ef9c"
