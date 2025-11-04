FROM ruby:3.1-slim
WORKDIR /usr/src/app
RUN apt-get update -qq && apt-get install -y build-essential zlib1g-dev git && rm -rf /var/lib/apt/lists/*
COPY Gemfile* ./
RUN gem install bundler && bundle install
COPY . .
EXPOSE 4000
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000"]
