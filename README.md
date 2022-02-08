# Api Spacesat

**¿Qué necesitas?**
Tener instalado node y mysql.

**¿Como correr la api?**

- Descarga este repositorio.
- Antes de correr cualquier cosa verifica algunos de los datos que seran necesarios para conectarse a la base de datos por ejemplo.
	- Nombre de la base de datos (bd) 
	- Puerto de la bd 
	- Contraseña de la bd
	- Usuario de la bd.
	- Llave para autenticar el api

- Y agregalos a un archivo llamado `.env` que se encuentre en la raiz del repositorio. Se tiene que ver algo asi 
```markdown
    PORT=3001
    DB_USER = "root"
    DB_PASSWORD = "contraseña"
    DB_HOST = "localhost"
    DB_NAME = "basedata"
    DB_PORT = 3306
    DATABASE_URL = "mysql://root:contraseña@localhost:3306/basedata"
    API_KEY = "otracontraseña"
```
Notemos que `DATABASE_URL` está compuesto de valores que están dentro del mismo archivo y que la estructura es la siguiente.

```markdown
DATABASE_URL = "mysql://[DB_USER]:[DB_PASSWORD]@[DB_HOST]:[DB_PORT]/[DB_NAME]"
```
- Instalar las dependencias que se van a utilizar en este proyecto, esto lo hacemos con `npm install`.

- Correr las migraciones de la base de datos, para que mysql ya tenga la estructura dada, esto lo hacemos con `npm run migrations:run`
- Si todo salio bien, ya debería estar lista la api, para correrla usamos `npm run start`

