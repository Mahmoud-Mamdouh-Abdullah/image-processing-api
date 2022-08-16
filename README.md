# image-processing-api
- API used in resizing images

### Technologies used:
>NodeJS

>ExpressJS

>TypesScript

>Node File System

>Jasmine package for unit testing

>eslint and prettier for code formatting and fixing errors

## Installation

```
npm i
```
to install all project dependencies
```
npm run build
```
to build the project

## Project runnig
```
npm start
```
- to start the server, the api runs on port 3000 on http://localhost:3000/
- insert http://localhost:3000/filename={image-name}&width={}&height={} to resize your image.
- the api read the image from /images/full folder by filename
- the resized image is stored in /images/thumb folder
