ARG PYENV_VERSION=3.8.7
ARG PYENV_ROOT=/opt/.pyenv

FROM ubuntu:xenial-20210611 AS base
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
  netcat
RUN service ssh start

FROM base as python
RUN apt update && apt install -y \
 libssl-dev \
 zlib1g-dev \
 libbz2-dev \
 libreadline-dev \
 libsqlite3-dev \
 llvm \
 libncurses5-dev \
 libncursesw5-dev \
 xz-utils \
 tk-dev \
 libxml2-dev \
 libxmlsec1-dev \
 libffi-dev \
 liblzma-dev \
 python-openssl
ARG PYENV_ROOT
ENV PYENV_ROOT=${PYENV_ROOT}
RUN git clone https://github.com/pyenv/pyenv.git ${PYENV_ROOT}
ENV PATH=${PATH}:${PYENV_ROOT}/bin
ARG PYENV_VERSION
ENV PYENV_VERSION=${PYENV_VERSION}
RUN pyenv install ${PYENV_VERSION}

FROM base as final
#  bring in python
ARG PYENV_VERSION
ENV PYENV_VERSION=${PYENV_VERSION}
ARG PYENV_ROOT
ENV PATH="${PYENV_ROOT}/shims:${PATH}"
COPY --from=python ${PYENV_ROOT} ${PYENV_ROOT}

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
