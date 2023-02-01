#!/bin/bash -i

shopt -s expand_aliases
if [[ -z ${INIT_CWD} ]]; then
    INIT_CWD=$(pwd)
fi

if [[ $1 == "audit" ]]; then
    detect-secrets audit --report --fail-on-unaudited --fail-on-live --fail-on-audited-real .secrets.baseline
elif [[ $1 == "exclude" ]]; then
    detect-secrets scan --update .secrets.baseline --exclude-files $2
elif [[ $1 == "update-baseline" ]]; then
    detect-secrets scan --update .secrets.baseline
else
    detect-secrets-hook --baseline .secrets.baseline $@
fi
