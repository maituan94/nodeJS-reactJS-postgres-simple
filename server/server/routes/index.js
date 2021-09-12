const storesController = require('../controllers').stores;
const employeesController = require('../controllers').employees

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the stores API!',
  }));

  app.post('/api/stores', storesController.create);
  app.get('/api/stores', storesController.list);
  app.get('/api/stores/:storeId', storesController.retrieve);
  app.put('/api/stores/:storeId', storesController.update);
  app.delete('/api/stores/:storeId', storesController.destroy);

  app.post('/api/stores/:storeId/employee', employeesController.create);
  app.put('/api/stores/:storeId/items/:employeeId', employeesController.update);
  app.delete(
    '/api/stores/:storeId/items/:employeeId', employeesController.destroy
  );

  // For any other request method on stores employees, we're going to return "Method Not Allowed"
  app.all('/api/stores/:storeId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};