# Ansible Playground
This is a small workflow to experiment with ansible-playbook

## To deploy hello app
* `bin/local_dev up`
  * this will fail on first run and tell you to modify your local `/etc/hosts`
  * perform the modification and run the command again
* `ansible-playbook -i inventory/local hello.yml`
* [view the running app at http://node-01:8001](http://node-01:8001)
* [view the running app at http://node-02:8002](http://node-02:8002)
* [view the running app at http://node-03:8003](http://node-03:8003)
* [view the running app at http://node-04:8004](http://node-04:8004)
* [view the running app at http://node-05:8005](http://node-05:8005)
* [view the running app at http://node-06:8006](http://node-06:8006)
* [view the running app at http://node-07:8007](http://node-07:8007)
* [view the running app at http://node-08:8008](http://node-08:8008)

## To destroy local environment
* `bin/local_dev down`

## Required Dependencies
* `ansible-playbook`
* `docker`
* `docker-compose`
* `jq`
* `spruce`
* `ssh`
* `ssh-keygen`
* `yq`

### What's happening
`bin/local_dev up` will,
* on first run
  * build a docker image that will serve as our local environment
* generate an ssh key pair that will be used for further provisioning
* run a number of containers that are now waiting for further interaction

`ansible-playbook -i inventory/local hello.yml` will
* provision the local environment
* build the source code
* deploy the app

`bin/local_dev down` will
* terminate the running container(s)

### Advanced
`bin/ssh -i infrastructure/environments/local/id_rsa app@node-01` will drop you in to a shell in the local environment for file system exploration and/or debugging
