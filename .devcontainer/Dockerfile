FROM mcr.microsoft.com/devcontainers/typescript-node:0-18

USER root
RUN apt-get -y update \
 && apt-get -y install python3-pip \
 && pip3 install --upgrade "git+https://github.com/ibm/detect-secrets.git@master#egg=detect-secrets"
