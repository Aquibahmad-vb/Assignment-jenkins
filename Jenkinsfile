pipeline{
    agent any
        stages{
            stage("test"){
                steps{
                    sh "npm test"
                }
            }
            stage("build/push"){
                steps{
                    sh "docker build -t bots-trading ."
                    sh "docker tag bots-trading aquib001/bots-trading"
//                     sh "docker push aquib001/bots-trading"
                }
            }
            stage("deploy"){
                steps{
                    sh "docker pull aquib001/bots-trading"
                    sh "docker run -d -p 3000:3000 aquib001/bots-trading"
                }
            }
	    }
}
