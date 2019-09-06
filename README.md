# AngularJS-Sports-Store
## Desciption
AngularJS Sports Store - Uses "SpringMVCHibernateJava" project for backend
## Spring MVC Backend
**BEFORE SETUP** - download and setup the project here: https://github.com/lyaegel88/SpringMVCHibernateJava

Once this app is setup **AND** the backend is setup, start the Tomcat Server in the Spring MVC project
for this app to access the data. 

## AngularJS Setup
**Requirements**:
- node.js - Version 11 or higher.
- npm - latest version (older versions can be used, but with no guarantee)

After cloning this repo to your local machine and have the above 
requirements installed, run the following commands in a terminal (Mac/Linux) from the root directory of the
project: 

```
npm install
```

Once installed, you should be able to run the following command to start the server:
```
http-server -p 5000
```

**NOTE**: As an alternative, if using IntelliJ, it has a built in web server. Opening the app.html page
from within IntelliJ should work without using the above command.

If using the terminal and http-server, open the following URL to access the App: 
http://localhost:5000/app.html

There is also a small "Todo" app for fun which can be accessed at: http://localhost:5000/todo.html
