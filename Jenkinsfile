pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t expense-tracker .'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
            }
        }
        stage('SAST Scan') {
            steps {
                sh 'echo "Running static analysis..."'
            }
        }
        stage('Deploy') {
            steps {
                sh 'helm upgrade --install expense-tracker ./helm'
            }
        }
    }
}
