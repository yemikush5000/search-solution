# search-solution
repos , main branch is for nodejs version
repo cSharp-version is the C# version of the Application
This application is first written in nodejs using Express framework, and ejs. It has a frontend rendered form using ejs. The server runs on port 3000, 

to test the code you can either install nodejs from website below or use a docker image that has node installed
https://nodejs.org/en/download/package-manager
deployment and testing steps
clone the code from the repo and cd to the directory 
run the command - inside where the files index.js is in the project
node index.js
this will render the homep age with an input and a button to submit yur search functionality.

Secondly the Appliocation has a C# code which I'm working on as it's not my native language so I 
decided to have it written in a language as nodejs before translating it to C#

please find the C# installation below

This is intended as a three tier application, you have your frontend rendered from a form on the server.
you can have a database like postgres SQL as the backend, which case you will need the client code to connect and import the database data into the same variable used in this application for the input data.
you can deploy this in a Serverless environment using api gateway, lambda with a function using a runtime of your choice, a dns record can point your domain. to the root path for the api.
and you can use a document database as dynamo db to store the data.

you can also use an ec2 instance have your node install, a backend relation database and loadbalncer if the application will be handling a lot of inputs, and caching of content using redis or memcache

final options to deploy will be in a kubernetes environment, containerise your application, and deploy your pods, servies, ingress resources, horizontal pod auto scaler, and this will be in a miroservice architecture whereby you add the parameters in your pipeline for connection of your server to the database which will be a pod using a base image of postgress.

You can finally use docker ECR as microservice for the business logic, and the database containers similar to the Kubernetes deployment.
