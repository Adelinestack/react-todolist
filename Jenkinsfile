pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout(scm)
            }
        }
        stage('Build Test') {
            steps {
                script{
                    docker.build("adelinestack/react-todolist")
                }
            }
        }
        stage('Test') {
            steps {
                sh("docker run adelinestack/react-todolist npm run test -- --coverage")
            }
        }
        stage('Deploy') {
            input {
                message "Should we push image?"
                ok "Yes, of course."
            }
            steps {
                script {
                    sh("echo Heyyyy")
                }
            }
        }
        stage('Push image') {
            steps {
                script {
                    docker.withRegistry("https://registry.hub.docker.com", "1092d8d4-77db-4464-8612-8b8f8624fc34"){
                       def image =  docker.build("adelinestack/react-todolist:B${BUILD_NUMBER}", "-f ./Dockerfile .")
                       image.push("B${BUILD_NUMBER}")
                   }
                }
            }
        }
    }
}