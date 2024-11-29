# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's code
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight web server to serve the production build
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the port that the app will run on
EXPOSE 3000
