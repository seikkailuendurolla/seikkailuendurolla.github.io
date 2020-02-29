
update-gemfile-lock:
	rm -f Gemfile.lock
	GEM_HOME=.tmpgem bundle install --no-deployment
	rm -rf .tmpgem
	bundle install --deployment

server:
	bundle exec jekyll serve --watch

install:
	bundle install --deployment
