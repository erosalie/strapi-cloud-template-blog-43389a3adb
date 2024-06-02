// Load environment variables from .env file
require('dotenv').config();  // Ensure this line is at the top to load the .env file

// Log environment variables to ensure they are loaded correctly
console.log('AWS Access Key:', process.env.DO_SPACE_ACCESS_KEY);
console.log('AWS Secret Key:', process.env.DO_SPACE_SECRET_KEY);
console.log('Endpoint:', process.env.DO_SPACE_ENDPOINT);
console.log('Bucket:', process.env.DO_SPACE_BUCKET);
console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);


module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
 // ...
  'open-ai': {
    enabled: true,
    config: {
      API_TOKEN: 'OPENAI_API_KEY',
    },
  },
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: env('DO_SPACE_ACCESS_KEY'),
          secretAccessKey: env('DO_SPACE_SECRET_KEY'),
          region: env('DO_SPACE_REGION'),
          endpoint: env('DO_SPACE_ENDPOINT'),
          s3ForcePathStyle: true,
        },
        params: {
          Bucket: env('DO_SPACE_BUCKET'),
        },
      },
    },
  },
});
