
# Use an official Nginx runtime as a base image
FROM nginx:latest
assurance
# Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static content
RUN rm -rf ./*

# Copy the compiled Angular app files to the container
COPY dist/front-end-lasto/* .

# Configuration to enable Nginx to run properly inside Docker
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for Nginx
EXPOSE 80

# Define the command to run the Nginx server
CMD ["nginx", "-g", "daemon off;"]
