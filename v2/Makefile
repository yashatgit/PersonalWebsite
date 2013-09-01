# Sprinklr UI v3
# Inspired from https://github.com/twitter/bootstrap/blob/master/Makefile

DATE=$(shell date +%I:%M%p)
CHECK=\033[32m✔\033[39m
HR=\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

build:
	@$(MAKE) start	
	@$(MAKE) stop
	
start:
	@echo "\n${HR}"
	@echo "Building Sprinklr UI..."
	@echo "${HR}\n"
	
stop:
	@echo "\n${HR}"
	@echo "Sprinklr UI successfully built at ${DATE}."
	@echo "${HR}\n"		

compileJS:
	@echo "\n${HR}"
	@echo "Compiling Sprinklr UI JavaScripts..."
	@echo "${HR}\n"
	@jshint js/*.js js/api/*.js js/collections/*.js js/factory/*.js js/models/*.js js/utils/*.js  js/views/*.js --config js/.jshintrc
	@echo "Running JSHint on javascript...             ${CHECK} Done"
	@echo "\n${HR}"
	@echo "Sprinklr UI JavaScripts successfully compiled at ${DATE}."
	@echo "${HR}\n"
	