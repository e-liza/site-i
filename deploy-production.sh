#!/bin/bash
# Example of usage: ./deploy.sh v0.0.18
git checkout release/staging && \
git pull && \
git checkout main && \
git pull && \
git merge release/staging --no-ff && \
git tag $1 -a -m "$1" && \
git push --follow-tags && \
git log --graph --format='medium' --abbrev-commit --all --date=relative
