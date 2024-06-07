# Use the official OpenJDK 17 JDK image with Alpine Linux as the base image
FROM openjdk:17-jdk-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the host to the container and rename it to ecommerce.jar
COPY target/ecommerce-backend-0.0.1-SNAPSHOT.jar /app/ecommerce.jar

# Expose port 8081 (or whatever port your Spring Boot app listens on)
EXPOSE 8081

# Set the entry point for the container to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "ecommerce.jar"]

