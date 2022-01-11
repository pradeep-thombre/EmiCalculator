# EMI CALCULATOR
The web app allows user to Calculate the EMI for different different principal amount,rate of intrest and duration upload and view monthwise Emi Table in a clean ui . it further improves user experience through -
1. User can download the EMI table in csv format .
2. User can send the EMI table on registered email.
3. User can check theire searcgh history and can view and remove previously calculated emis

## Requirements
1. Node 8
2. Git
3. MongoDB
## steps to setup project on your machine 
1. clone the repository
```
git clone https://github.com/pradeep-thombre/EmiCalculator.git
```
2. The node_modules is not a part of the cloned repository and should be downloaded using the npm install .
```
npm install
```
3. To run the project use 
```
npm start
```
## files
### 1.  index.js 
index.js is the main entry point of the project from where we start the  server .\
### 2.   config
it contains config file to set up mongoose.js which is used to setup mongoDB server .\
### 3.  models
it contains the EMI schema and user schema .\
### 4.  controllers
it contains all the actions which map to routes .\
### 5.  routes 
it contains all the endpoints and maps urls to actions .\
### 6.   views
it contains ejs files which are sent to the browser after being populated .\
### 7. package.json
it contains information about all the libraries i.e dependencies required by our project .\
### 8. package-lock.json
it contains information about all the libraries i.e sub-dependencies required by dependencies/librairies used in our project .\
### 9. node_modules
it contains the actual code/files of libraries mentioned in package.json and package-lock.json .
