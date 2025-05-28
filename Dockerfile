FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Force compatible ajv and ajv-keywords versions
RUN npm install ajv@^8.12.0 ajv-keywords@^5.1.0 --save-exact

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
