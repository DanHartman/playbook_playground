# Ansible Playground
This is a small workflow to experiment with ansible-playbook

## To deploy hello app
* `bin/local_dev up`
* `ansible-playbook -i inventory/local hello.yml`

## Required Dependencies
* `ansible-playbook`
* `docker`
* `ssh`
* `ssh-keygen`
