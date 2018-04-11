pipeline {
  agent {
    node {
      label 'master'
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
    stage('Build') {
      steps {
        echo 'Start building '
        sh 'npm build'
        echo 'End build'
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