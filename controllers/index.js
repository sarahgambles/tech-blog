const homeRoutes = require('./home-routes.js');

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const router = require('./home-routes.js');

router.use('/', homeRoutes);

router.use('/dashboard', dashboardRoutes);

router.use('/api', apiRoutes);

module.exports = router;