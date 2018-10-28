import crypto from 'crypto';

export function md5 (password) {
  return crypto
    .createHash('md5')
    .update(password)
    .digest('hex');
}
