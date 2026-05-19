variable "aws_region" {
  description = "AWS region (e.g., us-east-1, ap-south-1)"
  type        = string
  default     = "us-east-1"
}

variable "aws_role_arn" {
  description = "ARN of the IAM role for GitHub Actions to assume (created for OIDC)"
  type        = string
}

variable "ssh_key_name" {
  description = "SSH key pair name attached to EC2 instances"
  type        = string
  default     = "my-key"
}