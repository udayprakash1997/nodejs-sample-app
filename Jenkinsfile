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
        build 'nodejs'
        nodejs('nodejs') {
    // some block
        }
      }
    } 
  }
}
