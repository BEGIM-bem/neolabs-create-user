const express = require('express');
const router = express.Router();

const { saveUser, getUsers, editUser, DeleteUser, info, all_people_find } = require('./controller');

router.post('/create-user', saveUser);
router.get('/get-user', getUsers);
router.patch('/edit-user/:id', editUser);
//дз
router.get('/get-user-info/:id', info)
router.delete('/delete-user/:id', DeleteUser)
router.get('/find_all_people', all_people_find)

exports.router = router;