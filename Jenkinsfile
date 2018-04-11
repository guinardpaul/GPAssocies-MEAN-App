pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        echo 'Starting Git clone'
        git(url: 'https://github.com/guinardpaul/GPAssocies-MEAN-App', branch: 'master', credentialsId: 'guinardpaul')
        echo 'Repository cloned successfuly'
      }
    }
    stage('Launch') {
      steps {
        echo 'Lancement de l\'application'
        sh 'node server.js'
        echo 'Application démarré avec succès'
      }
    }
  }
}