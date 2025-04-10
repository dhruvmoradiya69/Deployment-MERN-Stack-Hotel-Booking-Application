# ------------------- Stage 1: Build Stage ------------------------------#

FROM node:18-alpine AS development

# Set the working directory inside the container
WORKDIR /app 

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm ci

# Copy the rest of the project files into the container
COPY . .

# Build the project (e.g., transpile TypeScript, bundle files)
RUN npm run build

# ------------------- Stage 2: Final Stage ------------------------------#
FROM node:alpine AS production 

# Set the working directory inside the production container
WORKDIR /app

# Copy only the necessary package files from the build stage
COPY --from=development /app/package*.json ./

# Copy the built output from the build stage
COPY --from=development /app/dist ./dist

# Install only production dependencies
RUN npm ci --only=production

# Expose the port your app will run on
EXPOSE 5050

# Command to start the app
CMD ["npm", "start"]

# docker build -t mern-backend:latest .