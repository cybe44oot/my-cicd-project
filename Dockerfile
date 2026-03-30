# Use a minimal nginx image to serve the app
FROM alpine:3.23

RUN apk update && apk upgrade
# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy our app into the nginx html folder
COPY app/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# nginx starts automatically — no CMD needed
