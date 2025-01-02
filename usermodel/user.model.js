import { DataTypes, DATE } from 'sequelize';
import sequelize from '../dbconnection.js';

const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    p_no: {
      type: DataTypes.STRING,  // Ensure the column type matches the expected format
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
export default Users;