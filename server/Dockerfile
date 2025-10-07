# Gunakan Node.js versi stable
FROM node:20-alpine

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy seluruh file project
COPY . .

# Expose port (sesuai index.js)
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
