module.exports = {
  apps: [
    {
      name: "Calldeals",
      script: "server.js",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
