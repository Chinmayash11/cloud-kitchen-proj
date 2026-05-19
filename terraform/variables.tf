variable "aws_region" {
  description = "AWS region (e.g., us-east-1, ap-south-1)"
  type        = string
  default     = "us-east-1"
}

variable "aws_role_arn" {
  description = "ARN of the IAM role to assume for GitHub Actions"
  type        = string
}