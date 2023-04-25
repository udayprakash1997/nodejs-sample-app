node
{

//Checkout Code stage
stage('CheckoutCode'){
git url: ''
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
