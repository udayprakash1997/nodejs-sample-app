pipeline {
   agent any
   stages {
         stage('Build Docker Image') {
  steps {
    sh 'docker build -t image1 .'
  }
}
     stage('Run Docker Container') {
  steps {
    sh 'docker run -d -p 8000:3000 --name cont1 image1'
  }
}
}
}
