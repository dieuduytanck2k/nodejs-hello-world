<img src="./image/architecture.png" alt="gcs" width="500"/>


# I. Managing GCP Infrastructure with Terraform

See detailed instructions here:  
[https://github.com/dieuduytanck2k/terraform](https://github.com/dieuduytanck2k/terraform)

# II. CICD and others
# 1. Dockerfile

<img src="./image/dockerfile.png" alt="gcs" width="300"/>

Explanation:

Multi-stage build:
    deps: install only production dependencies (excluding devDependencies).
    runtime: copy code and node_modules from the first stage -> resulting in a smaller image.
USER node: run the app as a non-root user for better security.
EXPOSE 8080: the app runs on port 8080.
CMD: start the app with server.js.
