# defra-clam-poc

Basic POC to containerise a Node app and run a virus scanner on file upload.

## Tasks

1. Make basic file upload website ✅
2. Containerise it ✅
3. Run clam

## To run

This service is containerised, so run:

> `docker build . -t kealan/clam-poc`

For the above, replace 'kealan' with your own name

You should now see the service built when you run:

> `docker images`

Now, run:

> `docker run -p 49160:8080 -d kealan/clam-poc`

And now the application is accessible on:

> http://localhost:49160/