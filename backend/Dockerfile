# Use an official Node.js runtime as a parent image
FROM node:18

# Install Python, Java, and build-essential (which includes GCC and G++)
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    openjdk-17-jdk-headless \
    build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set environment variables for Java
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]
