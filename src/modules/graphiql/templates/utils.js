import crypto from 'crypto';

export const md5 = word => crypto
  .createHash('md5')
  .update(word)
  .digest('hex');
