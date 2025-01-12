FROM node:14-alpine


WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .


EXPOSE 8000

CMD ["npm", "start"]
