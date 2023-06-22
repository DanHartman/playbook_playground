FROM ubuntu:23.10

ENV TZ="America/New_York"
ENV DEBIAN_FRONTEND="noninteractive"
ENV LC_ALL C
ENV LANG=en_US.utf8
RUN apt update && apt install -y \
  wget \
  curl \
  git \
  vim \
  tzdata \
  make \
  build-essential \
  libc6-i386 \
  gettext-base \
  lsb-release \
  openssh-server \
  sudo \
  apt-transport-https \
  python-is-python3
RUN service ssh start

# create user
ARG ANSIBLE_USER
ARG ANSIBLE_USER_PASSWORD
RUN useradd -ms /bin/bash ${ANSIBLE_USER} -G sudo
RUN echo ${ANSIBLE_USER}:${ANSIBLE_USER_PASSWORD} | chpasswd
RUN mkdir /home/${ANSIBLE_USER}/.ssh && \
  chmod 700 /home/${ANSIBLE_USER}/.ssh && \
  chown ${ANSIBLE_USER}:${ANSIBLE_USER} /home/${ANSIBLE_USER}/.ssh
COPY --chown=${ANSIBLE_USER}:${ANSIBLE_USER} id_rsa.pub /home/${ANSIBLE_USER}/.ssh/authorized_keys

# run that ssh server
CMD ["/usr/sbin/sshd","-D"]
