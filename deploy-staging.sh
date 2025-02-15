#!/bin/bash
# Example of usage: ./deploy-staging.sh v0.0.18
git checkout dev && \
git pull && \
git checkout release/staging && \
git pull && \
git merge dev --no-ff && \
git tag release-$1 -a -m "$1" && \
git push && \
git push --tags && \
git log --graph --format='medium' --abbrev-commit --all --date=relative

