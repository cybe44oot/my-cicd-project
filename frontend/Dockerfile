# Use a minimal nginx image to serve the app
<<<<<<< HEAD:Dockerfile
FROM alpine:3.23

RUN apk update && apk upgrade
=======
FROM nginx:alpine
>>>>>>> 38f8586 (Fix frontend Dockerfile and docker-compose paths):frontend/Dockerfile
# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy our app into the nginx html folder
COPY index.html /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# nginx starts automatically — no CMD needed
