#!/bin/bash
echo 'Running Script'
git status
git checkout main
git pull origin main
git merge mobiniqow
git push origin main --force
git pull origin main
git checkout mobiniqow
git merge main
echo 'Push Successfully'