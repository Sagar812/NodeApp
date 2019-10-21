
module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(() => queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.literal('uuid_generate_v4()'),
      },
      firstName:{
        type: DataTypes.STRING,
        field: 'first_name',
      },
      middleName: {
        type: DataTypes.STRING,
        field: 'middle_name',
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name',
      },
      createAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: DataTypes.NOW,
      },
      updatedAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: DataTypes.NOW,
      }
    })),

  down: queryInterface => queryInterface.dropTable('users'),
};
