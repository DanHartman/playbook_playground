# Ansible Playground
This is a small workflow to experiment with ansible-playbook

## To deploy hello app
* `bin/local_dev up`
* `ansible-playbook -i inventory/local hello.yml`
* [view the running app at http://localhost:8080](http://localhost:8080)

## To destroy local environment
* `bin/local_dev down`

## Required Dependencies
* `ansible-playbook`
* `docker`
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
`bin/ssh -i /absolute/path/to/privateKey user@host` will drop you in to a shell in the local environment for file system exploration and/or debugging
