FROM node:22

WORKDIR /app

COPY app/frontend/package*.json ./

RUN npm install

COPY app/frontend .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]