import { __prod__ } from '../utils/constants';
import { ConnectionOptions } from 'typeorm';

/**
 *
 * @returns TypeORM connection settings
 */
export const databaseOptions = async () => {
  let connOptions: ConnectionOptions;
  connOptions = {
    type: 'mongodb',
    database: 'todofy',
    port: 27017,
    host: __prod__ ? '' : 'localhost',
  };

  return connOptions;
};
