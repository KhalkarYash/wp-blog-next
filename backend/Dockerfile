# Use the official WordPress image (includes PHP + Apache)
FROM wordpress:php8.1-apache

# Install required system packages
RUN apt-get update && apt-get install -y unzip curl && rm -rf /var/lib/apt/lists/*

# Pre-install WPGraphQL plugin
RUN curl -L -o /tmp/wp-graphql.zip \
    https://github.com/wp-graphql/wp-graphql/releases/latest/download/wp-graphql.zip \
  && unzip /tmp/wp-graphql.zip -d /usr/src/wordpress/wp-content/plugins/ \
  && rm /tmp/wp-graphql.zip

# Pre-install Google Site Kit plugin
RUN curl -L -o /tmp/site-kit.zip \
    https://downloads.wordpress.org/plugin/google-site-kit.latest-stable.zip \
  && unzip /tmp/site-kit.zip -d /usr/src/wordpress/wp-content/plugins/ \
  && rm /tmp/site-kit.zip

# Enable Apache's URL rewriting (important for permalinks and REST endpoints)
RUN a2enmod rewrite
