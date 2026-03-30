# Use a minimal nginx image to serve the app
FROM nginx:alpine
# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy our app into the nginx html folder
COPY index.html /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# nginx starts automatically — no CMD needed
