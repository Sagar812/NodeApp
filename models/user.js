const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static init(sequelize, DataTypes){
        return super.init({
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
        },{
            tableName: 'users',
            underscored: true,
            sequelize,
        });
    }

    static insertUser(request) {
        return this.create(request);
    }
}

module.exports = User;