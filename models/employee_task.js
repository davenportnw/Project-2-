module.exports = (sequelize, DataTypes) => {
  const Employee_Task = sequelize.define(
    "Employee_Task",
    {
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false 
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Employee_Task;
};
