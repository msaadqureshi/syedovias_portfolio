# FROM node:18-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . . 
# EXPOSE 3000
# CMD npm run dev


# Use the official Node.js image based on Alpine Linux
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files to the container
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Build the Next.js app
RUN npm run build

# Start the application
CMD ["npm", "run", "start"]
