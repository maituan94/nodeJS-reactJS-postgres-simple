const Store = require('../models').Store;
const Employee = require('../models').Employee;
module.exports = {
    create(req, res) {
        if (!req.body.name && !req.body.phone) res.status(400).send("Name and Phone are required.")
        return Store
            .create({
                name: req.body.name,
                address: req.body.address,
                district: req.body.district,
                city: req.body.city,
                phone: req.body.phone,
                employees: req.body.employees
            },
                {
                    include: [{
                        model: Employee,
                        as: 'employees',
                    }]
                })
            .then(store => res.status(201).send(store))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Store
            .findAll({
                include: [{
                    model: Employee,
                    as: 'employees',
                }],
            })
            .then(stores => res.status(200).send(stores))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Store
            .findByPk(req.params.storeId, {
                include: [{
                    model: Employee,
                    as: 'employees',
                }],
            })
            .then(store => {
                if (!store) {
                    return res.status(404).send({
                        message: 'Store Not Found',
                    });
                }
                return res.status(200).send(store);
            })
            .catch(error => res.status(400).send(error));
    },
    async update(req, res) {
        const { storeId } = req.params
        const { employees } = req.body
        const store = {
            name: req.body.name,
            address: req.body.address,
            district: req.body.district,
            city: req.body.city,
            phone: req.body.phone
        }

        try {
            const updatePromises = [];
            const updateStorePromise = Store.update(
                store,
                { where: { id: storeId } },
            );
            updatePromises.push(updateStorePromise);
            employees.forEach(emp => {
                let employeePromise;
                if (!emp.id) {
                    employeePromise = Employee.create({
                        ...emp,
                        storeId: req.params.storeId,
                    })
                }else{
                    employeePromise = Employee.update(emp, { where: { id: emp.id } })
                }
                updatePromises.push(employeePromise)
            });
            await Promise.all(updatePromises);
            res.status(200).send(req.body)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    destroy(req, res) {
        return Store
            .findByPk(req.params.storeId)
            .then(store => {
                if (!store) {
                    return res.status(400).send({
                        message: 'Store Not Found',
                    });
                }
                return store
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Store deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};