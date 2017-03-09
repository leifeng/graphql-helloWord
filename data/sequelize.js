import Sequelize from 'sequelize';
var sequelize = new Sequelize('sqlite:database.sqlite');
sequelize
    .authenticate()
    .then(function (err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });

export default sequelize;
var User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
// User.sync({ force: true }).then(function () {
//     // Table created
//     User.create({
//         firstName: 'John',
//         lastName: 'Hancock'
//     });

//     User.findOne().then(function (user) {
//         console.log(user.get('firstName'));
//     });
// });


// User.findAll().then(function(users) {
//   console.log(users)
// })
