# Use the official Python 3.12.3 image as the base image
FROM python:3.12.3-slim-bullseye

# Set the working directory in the container
WORKDIR /app
COPY requirements.txt .
COPY ./django_backend .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
