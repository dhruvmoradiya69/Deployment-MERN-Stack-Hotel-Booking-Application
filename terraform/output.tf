output "project_name" {
  description = "Name of the DevOps infrastructure project"
  value       = "End-to-End DevOps Pipeline with Terraform, Jenkins, and ArgoCD on AWS"
}

output "deployment_region" {
  description = "AWS region where resources are deployed"
  value       = var.aws_region
}

output "jenkins_public_ip" {
  description = "Public IP address of the Jenkins server"
  value       = aws_instance.jenkins_server.public_ip
}

output "sonarqube_public_ip" {
  description = "Public IP address of the SonarQube server"
  value       = aws_instance.sonarqube_server.public_ip
}

output "jenkins_instance_details" {
  description = "Detailed information about the Jenkins server"
  value = {
    ami_id        = aws_instance.jenkins_server.ami
    instance_id   = aws_instance.jenkins_server.id
    instance_type = aws_instance.jenkins_server.instance_type
    public_ip     = aws_instance.jenkins_server.public_ip
    private_ip    = aws_instance.jenkins_server.private_ip
    access_url    = "http://${aws_instance.jenkins_server.public_ip}:8080"
  }
}

output "sonarqube_instance_details" {
  description = "Detailed information about the SonarQube server"
  value = {
    ami_id        = aws_instance.sonarqube_server.ami
    instance_id   = aws_instance.sonarqube_server.id
    instance_type = aws_instance.sonarqube_server.instance_type
    public_ip     = aws_instance.sonarqube_server.public_ip
    private_ip    = aws_instance.sonarqube_server.private_ip
    access_url    = "http://${aws_instance.sonarqube_server.public_ip}:9000"
  }
}

output "deployment_tools" {
  description = "List of DevOps tools installed on the Jenkins server"
  value = [
    "Docker",
    "Jenkins",
    "kubectl",
    "AWS CLI",
    "eksctl",
    "ArgoCD CLI",
    "Helm",
    "Trivy"
  ]
}
