pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/YOUR-REPOSITORY.git'
      } 
     stage('Install dependencies') {
       steps {
         sh 'npm install'
       }
     }
      stage('Build and test') {
        steps {
          sh 'npm run build'
          sh 'npm test'
        }
      }
      // stage('Deploy') { steps { // Add your deployment script here } } } }
