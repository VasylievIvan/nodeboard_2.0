FROM node:18-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --force
COPY . .
RUN npm run build && \
    npm install serve -g

EXPOSE 3000

CMD ["serve", "-s", "build"]
