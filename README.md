## Description

Vehicule-Service is an Application Programming Interface (API) to add,delete,updateand get vehicule .
## Installation :
```bash
# install requirements
$ pip install -r requirements.txt 
```
## Running the app : 
```bash
# Run application
$ gunicorn -c gunicorn_config.py main:app
```
## Build Docker image : 
```bash
# build a docker image
$ docker build -t vehicule-service .
```
## Running the app in the Docker : 
```bash
# Run docker image
$ docker run -p 5000:5000 vehicule-service
```


## Stay in touch :
- Author - [Ouail Laamiri](https://www.linkedin.com/in/ouaillaamiri/) , [Hajar Sadik]()

## License

This repository is [GPL licensed](LICENSE).

