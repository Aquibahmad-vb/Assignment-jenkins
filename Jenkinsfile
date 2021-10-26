pipeline{
    // creating environment varibale
    environment{
	    image="aquib001/trading-bot"
	}
    agent any
        stages{
            // test stage
            stage("test"){
                steps{
                    sh "npm test"
                }
            }
            // build stage where i build docker image and push to docker hub
            stage("build/push"){
                steps{
                    sh "docker build -t $image ."  // build image
                    sh "docker push $image"  // push image to docker hub
                    sh "docker rmi -f $image"  // remove image 
                }                                                                                                                                                                                                                                                                                               
            }
            // deploy  stage weher i pull docker image and run docker image 
            stage("deploy"){
                steps{
                    sh "docker pull $image" //pull image from docker hub
                    sh "docker run -d -p 3000:3000 $image" // run image 
                }
            }
	}
}
