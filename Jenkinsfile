pipeline {
  agent {
    node {
      label 'rtm_Cloud'
    }
    
  }
  stages {
    stage('prepare') {
      steps {
        dir(path: '/root/huykai/node_webserver/angularjs_shmccps') {
          sh 'git pull'
        }
        
      }
    }
  }
}