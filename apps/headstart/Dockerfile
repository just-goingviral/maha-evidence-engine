# Headstart Dockerfile with MAHA branding
FROM php:8.1-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    nodejs \
    npm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Enable Apache modules
RUN a2enmod rewrite headers

# Set working directory
WORKDIR /var/www/html

# Clone specific version of Headstart (pin to a stable commit)
# This commit represents a stable version as of the project creation
ARG HEADSTART_VERSION=master
RUN git clone --depth 1 --branch ${HEADSTART_VERSION} https://github.com/OpenKnowledgeMaps/Headstart.git . && \
    rm -rf .git

# Remove upstream branding
RUN rm -f headstart.png && \
    rm -f doc/img/headstart_architecture.png && \
    find . -name "*.php" -type f -exec sed -i 's/Open Knowledge Maps/MAHA Evidence Engine/g' {} \; && \
    find . -name "*.js" -type f -exec sed -i 's/Open Knowledge Maps/MAHA Evidence Engine/g' {} \; && \
    find . -name "*.html" -type f -exec sed -i 's/Open Knowledge Maps/MAHA Evidence Engine/g' {} \;

# Install Node dependencies and build
RUN npm install && \
    npm run build || true

# Set permissions
RUN chown -R www-data:www-data /var/www/html && \
    chmod -R 755 /var/www/html

# Configure Apache to run on port 8080
RUN sed -i 's/80/8080/g' /etc/apache2/sites-available/000-default.conf && \
    sed -i 's/80/8080/g' /etc/apache2/ports.conf

# Expose port
EXPOSE 8080

# Start Apache
CMD ["apache2-foreground"]
