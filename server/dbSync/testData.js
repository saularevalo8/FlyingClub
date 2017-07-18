import instructor from '../lib/user';
import _ from 'lodash';
import faker from 'faker';

module.exports.generate = (db) => {
    console.log('Adding test data...'.green);

    Promise.all([
        new Promise((resolve, reject) => {

            _.times(20, () => {
                db.User.create({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    address: faker.address.streetAddress(),
                    phoneNum: faker.phone.phoneNumber(),
                    email: faker.internet.email(),
                    memberStatus: "Active",
                    medicalRecords: "First",
                    schedulingPrivileges: "Current",
                    acAssignment: "N73614",
                    pilotRatings: "SEL",
                    certificationLevel: "Sport",
                    username: faker.random.word(),
                    password: faker.random.word()

                })
            });
            resolve();
        }),

   

    ]).then(values => {
        console.log('Test data has been generated'.green);
        user.addImage(1);
        db.User.findById(1).then(res => {
           res.update({image: "nktkbiklkmwnkbl7zh1r"}).then(result => {
               user.getImage(1);
           })
        });

    });

};