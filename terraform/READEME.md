# DevOps Infrastructure with Terraform

This repository contains Terraform configurations to provision a complete DevOps infrastructure on AWS, including Jenkins and SonarQube servers with all the necessary tools for CI/CD pipelines.

## Overview

This project automates the deployment of:
- Jenkins server with pre-installed DevOps tools
- SonarQube server for code quality analysis
- Necessary AWS infrastructure (VPC, security groups, etc.)

## Architecture

![Architecture Diagram](https://placeholder-for-architecture-diagram)

The infrastructure includes:
- EC2 instances for Jenkins and SonarQube
- Default VPC configuration
- Security group with required ports open (22, 80, 443, 8080, 9000)
- AWS key pair for SSH access

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) (v1.0.0+)
- AWS account with appropriate permissions
- SSH key pair (public key should be named `devops-key.pub` in the project root)
- AWS CLI configured with your credentials

## Tools Included

The following tools are automatically installed on the Jenkins server:
- Docker
- Jenkins
- kubectl
- AWS CLI
- eksctl
- ArgoCD CLI
- Helm
- Trivy

## Quick Start

1. Clone this repository:
   ```bash
   git clone https://github.com/dhruvmoradiya69/Deployment-MERN-Stack-Hotel-Booking-Application.git
   cd terraform
   ```

2. Create an SSH key pair (if you don't have one already):
   ```bash
   ssh-keygen -t rsa -b 4096 -f devops-key
   ```

3. Initialize Terraform:
   ```bash
   terraform init
   ```

4. Review the plan:
   ```bash
   terraform plan
   ```

5. Apply the configuration:
   ```bash
   terraform apply
   ```

6. Access your services (URLs will be displayed in the output):
   - Jenkins: http://<jenkins_public_ip>:8080
   - SonarQube: http://<sonarqube_public_ip>:9000

## Configuration

You can customize the deployment by modifying variables in `variable.tf`:

| Variable | Description | Default |
|----------|-------------|---------|
| aws_region | AWS region to deploy resources | ap-south-1 |
| instance_type | EC2 instance type for Jenkins | t2.large |
| aws_sonar_type | EC2 instance type for SonarQube | t2.medium |
| aws_block_size | Root block device size (GB) | 25 |
| aws_key_pair | Name of the SSH key pair | devops-key |

## Usage Examples

### Setting Up a CI/CD Pipeline with Jenkins and ArgoCD

1. Access Jenkins at http://<jenkins_public_ip>:8080
2. Retrieve the initial admin password:
   ```bash
   ssh -i devops-key ubuntu@<jenkins_public_ip> "sudo cat /var/lib/jenkins/secrets/initialAdminPassword"
   ```
3. Install suggested plugins and create your admin user
4. Configure your pipeline to use SonarQube for code quality analysis
5. Use ArgoCD for GitOps-based deployment to Kubernetes

## Cleanup

To destroy the infrastructure when you're done:

```bash
terraform destroy
```

## Security Notes

- The current configuration opens some ports to the public internet (0.0.0.0/0)
- For production use, restrict access to known IP ranges
- Consider using AWS Secrets Manager for sensitive information
