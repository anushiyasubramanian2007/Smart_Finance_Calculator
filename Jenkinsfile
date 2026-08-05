pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/anushiyasubramanian2007/Smart_Finance_Calculator.git'
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Start Backend') {
            steps {
                dir('backend') {
                    bat 'start /B node server.js'
                }
            }
        }

        stage('Wait for Server') {
            steps {
                bat 'timeout /t 5'
            }
        }

        stage('Test API') {
            steps {
                bat 'curl http://localhost:5000'
            }
        }

        stage('Serve Frontend') {
            steps {
                dir('frontend') {
                    bat 'start /B npx serve .'
                }
            }
        }
    }
}