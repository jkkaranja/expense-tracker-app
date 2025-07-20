# Monthly Expense Tracker

## Overview
This project tracks monthly expenses and visualizes data through a line chart. It is built with Node.js and containerized with Docker. It is deployed on AWS with Kubernetes using Helm.

## Features
- Add expenses with category, date, and amount.
- Dynamic chart for monthly expenses.
- Secured with Helmet and HTTPS.
- Dockerized and CI/CD enabled via Jenkins.
- SAST/DAST ready.
- Monitoring via Grafana.

## Project Structure
- `index.html`, `style.css`, `script.js` - Frontend files
- `server.js` - Node.js backend server
- `Dockerfile`, `Jenkinsfile`, `helm/` - DevOps components

## Deployment Instructions
- Install Docker, Kubernetes, Helm
- Build Docker image, push to registry
- Apply Helm chart to Kubernetes cluster

## SDLC
Agile methodology with GitHub Issues, Trello board for planning

## CI/CD
Jenkins pipeline with build, test, SAST, deploy stages