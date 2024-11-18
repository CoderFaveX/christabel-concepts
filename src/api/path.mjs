import { fileURLToPath } from 'url';
import { dirname } from 'path';
// Get the file path
export const __filename = fileURLToPath(import.meta.url);
// Get the directory path
export const __dirname = dirname(__filename);
