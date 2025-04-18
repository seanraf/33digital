// import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'; // Removed unused import
import { postgresAdapter } from '@payloadcms/db-postgres';
import { supabase } from './lib/supabase'; // Re-added import as it's used by imported collections (e.g., Pages)
import sharp from 'sharp';
import path from 'path';
import { buildConfig } from 'payload'; // Use named import
import { PayloadRequest } from 'payload';
import { fileURLToPath } from 'url';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'; // Import the adapter

import { Categories } from './collections/Categories';
import { Media } from './collections/Media';
import { Pages } from './collections/Pages';
import { Posts } from './collections/Posts';
import { Users } from './collections/Users';
import { Footer } from './Footer/config';
import { Header } from './Header/config';
import { plugins } from './plugins';
import { defaultLexical } from '@/fields/defaultLexical';
import { getServerSideURL } from './utilities/getURL';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  collections: [Pages, Posts, Media, Categories, Users],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  email: nodemailerAdapter({ // Use the adapter here
    defaultFromAddress: 'info@33d.co',
    defaultFromName: '33Digital',
    transportOptions: {
      host: 'smtp.gmail.com', // Reverted to standard Gmail host
      port: 587, // Reverted to port 587
      secure: false, // Reverted to secure: false for port 587 (TLS)
      auth: {
        user: process.env.EMAIL_USER || '', // Use environment variable
        pass: process.env.EMAIL_PASS || '', // Use environment variable
      },
    },
  }),
  plugins: [
    // Removed commented-out cloudStoragePlugin block
    ...plugins,
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true;
        const authHeader = req.headers.get('authorization');
        return authHeader === `Bearer ${process.env.CRON_SECRET}`;
      },
    },
    tasks: [],
  },
});
