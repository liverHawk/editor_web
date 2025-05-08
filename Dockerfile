FROM node:current

RUN apt-get update && apt-get upgrade -y

WORKDIR /app

RUN npm i -g @angular/cli
EXPOSE 4200
# RUN npm i
# RUN npm run build
CMD ["npm", "run", "start"]
