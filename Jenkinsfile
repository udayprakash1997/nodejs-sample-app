pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/udayprakash1997/nodejs-sample-app.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'docker build -t xyz .
        sh 'docker run -itd -p 85:3000 --name xyz xyz
      }
    } 
  }
}
