pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: "https://github.com/dhruvmoradiya69/CI-CD-Deployment-HotelHub-MERN.git", branch: "main"
            }
        }
        stage('Build Image') {
            parallel {
                stage('Build Frontend Image') {
                    steps {
                        sh "docker build -t mern-frontend:latest ./frontend"
                    }
                }
                stage('Build Backend Image') {
                    steps {
                        sh "docker build -t mern-backend:latest ./backend"
                    }
                }
            }
        }
        stage("Push Docker Images") {
            parallel {
                stage('Docker Login') {
                    steps {
                        withCredentials([usernamePassword(
                            credentialsId: "dockerhubid",
                            usernameVariable: "dockerHubUser", 
                            passwordVariable: "dockerHubPass"
                        )]) {
                            sh 'echo $dockerHubPass | docker login -u $dockerHubUser --password-stdin'
                        }
                    }
                }
                stage('Push Frontend Image') {
                    steps {
                        sh "docker image tag mern-frontend:latest ${env.dockerHubUser}/mern-frontend:latest"
                        sh "docker push ${env.dockerHubUser}/mern-frontend:latest"
                    }
                }
                stage('Push Backend Image') {
                    steps {
                        sh "docker image tag mern-backend:latest ${env.dockerHubUser}/mern-backend:latest"
                        sh "docker push ${env.dockerHubUser}/mern-backend:latest"
                    }
                }
            }
        }
        stage('Deploy Application') {
            steps {
                sh "docker compose down && docker compose up -d --build"
            }
        }
        stage('Remove Unused Images') {
            steps {
                sh "docker image prune -a -f"
            }
        }
    }
}
