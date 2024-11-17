import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the file path
export const __filename: string = fileURLToPath(import.meta.url);

// Get the directory path
export const __dirname: string = dirname(__filename);