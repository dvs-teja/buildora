# Stage 1: Build the application
FROM maven:3.8.5-openjdk-17-slim AS builder

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Grant execute permission to mvnw if needed
RUN chmod +x mvnw

# Build the project
RUN ./mvnw clean package -DskipTests

# Stage 2: Run the application
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy the jar file from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Expose the port your Spring Boot app runs on (default: 8080)
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
