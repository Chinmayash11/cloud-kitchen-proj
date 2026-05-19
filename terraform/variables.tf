variable "aws_region" {
  description = "AWS region (e.g., us-east-1, ap-south-1)"
  type        = string
  default     = "us-east-1"
}

variable "ssh_key_name" {
  description = "SSH key pair name attached to EC2 instances"
  type        = string
  default     = "my-key"
}