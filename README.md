# defra-clam-poc

Basic POC to containerise a Node app and run a virus scanner on file upload.

## Tasks

1. Make basic file upload website ✅
2. Containerise it ✅
3. Run clam ✅
4. Get Clam scanning an uploaded file

## To run as a container isolated

This service is containerised, so run:

> `docker build . -t kealan/clam-poc`

For the above, replace 'kealan' with your own name

You should now see the service built when you run:

> `docker images`

Now, run:

> `docker run -p 49160:8080 -d kealan/clam-poc`

And now the application is accessible on:

> http://localhost:49160/

## To run locally

You can simply run:

> `node index.js`

And the app will start and be accessible on 

> http://localhost:7000

## To run the entire application

The entire application is a basic file upload Node app and a ClamAV container that scans the uploaded files

To run both containers, you can simple run:

> `docker-compose up`