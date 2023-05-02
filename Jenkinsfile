node
{

//Checkout Code stage
stage('CheckoutCode'){
git  credentialsId: 'a7f700e7-98a4-4337-bd4a-aac2db5fd8fb' url: 'https://github.com/udayprakash1997/nodejs-sample-app.git'
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
