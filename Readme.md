 #  Step to set-up node express and mongodb projects

  - npm init 
  - create new file index.js
  - npm i express
  - npm i dotenv 
  - create new file dotenv
  - create .gitignore
  - create a src folder to organize your all files 
  and also create public/temp folder for firstly upload your files here then any cloud 
  - install nodemon for automatically restarts your node application when it detects any changes 
  - create some folders inside src folder - controlles,models,routes,middlewares,db and utils

  - install prettier for code structure for dev(npm i -D prettier)
    - add .prettierrc file for prettier configration
    - add .prettierignore file for ignore files
  - install mongoose ( npm i mongoose )
    - craete index.js for connect mongodb
    - connect mongodb to in main index.js 
  - create app.js for expressjs in src folder
    - install cors and cookie-parser
  - create a utility asyncHandler file for  wraped a function with try catch or Promise  