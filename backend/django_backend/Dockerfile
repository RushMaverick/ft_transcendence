# Use the official Python 3.12.3 image as the base image
FROM python:3.12.3-slim-bullseye

# Set the working directory in the container
WORKDIR /app
COPY requirements.txt .
# COPY ./django_backend ./app
# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 8000 available outside the container
# EXPOSE 8000

# Run the Django development server when the container launches
# CMD ["bash", "-c", " python manage.py makemigrations && python manage.py migrate"]
