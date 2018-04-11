pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }
    
  }
  stages {
    stage('Clone') {
      steps {
        echo 'Starting Git clone'
        git(url: 'https://github.com/guinardpaul/GPAssocies-MEAN-App', branch: 'master', credentialsId: 'guinardpaul')
        echo 'Repository cloned successfuly'
      }
    }
    stage('Install') {
      steps {
        echo 'Installation de l\'application'
        sh 'npm install'
        echo 'Installation terminé avec succès'
      }
    }
  }
}