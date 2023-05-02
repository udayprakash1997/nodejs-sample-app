node
{

//Checkout Code stage
stage('CheckoutCode'){
git url: 'https://github.com/udayprakash1997/nodejs-sample-app.git'
}

//Build
stage('Build'){
nodejs(nodeJSInstallationName: 'nodejs18.6.0'){
sh "npm install"
}
}
  stage('RunNodeJsApp')
{
sh "npm run app.js &"
}
}
