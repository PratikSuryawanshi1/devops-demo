# Use the official Node.js image from Docker Hub
FROM node:lts-alpine

# Set the environment variable to production
ENV NODE_ENV=production

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Change ownership of the application files
RUN chown -R node /usr/src/app

# Switch to the node user
USER node

# Start the application
CMD ["npm", "start"]
