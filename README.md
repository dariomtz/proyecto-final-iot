# Proyecto final Internet of Things

## Nodo sensor

Utiliza la IDE de arduino para abrir el archivo localizado en `nodo-sensor/nodo-sensor.ino`.

## Nodo gateway

Utiliza la IDE de arduino para abrir el archivo localizado en `nodo-gateway/nodo-gateway.ino`.

## Backend

Crea un ambiente virtual de python

```bash
python3 -m venv venv
```

Activa el ambiente virtual

```bash
# Para mac
source venv/bin/activate

# Para windows
venv\Scripts\activate.bat
```

Instala las dependencias

```bash
pip install -r requirements.txt
```

Corre el servidor

```bash
cd backend
python manage.py runserver
```

## Frontend

Instala las dependencias

```bash
npm install
```

Corre el servidor

```bash
npm start
```

