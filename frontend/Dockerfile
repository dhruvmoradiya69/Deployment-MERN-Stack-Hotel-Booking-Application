# ------------------- Stage 1: Build Stage ------------------------------#
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies using npm ci
RUN npm ci

# Copy the source files to the container
COPY . .

# Build the React application
RUN npm run build

# ------------------- Stage 2: Final Stage ------------------------------#
FROM nginx:1.27-alpine-slim AS production

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from the builder stage to the Nginx folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for web traffic
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

# docker build -t mern-frontend:latest .