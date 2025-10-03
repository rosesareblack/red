// This file is for Cloudflare deployment only
// Currently disabled since the app runs on Node.js runtime

/*
import { type PlatformProxy } from 'wrangler';

type Cloudflare = Omit<PlatformProxy<Env>, 'dispose'>;

declare module '@remix-run/cloudflare' {
  interface AppLoadContext {
    cloudflare: Cloudflare;
  }
}
*/
