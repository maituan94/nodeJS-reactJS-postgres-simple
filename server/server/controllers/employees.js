const Employee = require('../models').Employee;

module.exports = {
  create(req, res) {
    return Employee
      .create({
        name: req.body.name,
        address: req.body.address,
        district: req.body.district,
        city: req.body.city,
        role: req.body.role,
        storeId: req.params.storeId,
      })
      .then(employee => res.status(201).send(employee))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Employee
      .find({
        where: {
          id: req.params.employeeId,
          storeId: req.params.storeId,
        },
      })
      .then(employee => {
        if (!employee) {
          return res.status(404).send({
            message: 'Employee Not Found',
          });
        }

        return employee
          .update({
            name: req.body.name || employee.name,
            address: req.body.address || employee.address,
            district: req.body.district || employee.district,
            city: req.body.city || employee.city,
            role: req.body.role || employee.role
          })
          .then(updatedemployee => res.status(200).send(updatedemployee))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Employee
      .find({
        where: {
          id: req.params.employeeId,
          storeId: req.params.storeId,
        },
      })
      .then(employee => {
        if (!employee) {
          return res.status(404).send({
            message: 'Employee Not Found',
          });
        }

        return employee
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
