# Use official WordPress image with PHP 8.1 and Apache
FROM wordpress:php8.1-apache

# Install system dependencies
RUN apt-get update && apt-get install -y unzip curl && rm -rf /var/lib/apt/lists/*

# Install WPGraphQL
RUN curl -L -o /tmp/wp-graphql.zip https://github.com/wp-graphql/wp-graphql/releases/latest/download/wp-graphql.zip \
  && unzip /tmp/wp-graphql.zip -d /usr/src/wordpress/wp-content/plugins/ \
  && rm /tmp/wp-graphql.zip

# Install Google Site Kit
RUN curl -L -o /tmp/site-kit.zip https://downloads.wordpress.org/plugin/google-site-kit.latest-stable.zip \
  && unzip /tmp/site-kit.zip -d /usr/src/wordpress/wp-content/plugins/ \
  && rm /tmp/site-kit.zip

# Enable Apache rewrite module (required for /graphql and clean URLs)
RUN a2enmod rewrite

# Add static .htaccess file to enable pretty permalinks (manually because Render FS is not writable)
COPY .htaccess /var/www/html/.htaccess
