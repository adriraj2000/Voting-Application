const router = require('express').Router();
const handle = require('../handlers');
const auth = require('../middleware/auth');

router// Mainly for public page
  .route('/')
  .get(handle.showPolls)
  .post(auth, handle.createPoll);//This can happen with the authentication middleware functioning in between

router.get('/user', auth, handle.usersPolls);//This is for handling individual user polls

router //Handling the polls after the user authenticates
  .route('/:id')
  .get(handle.getPoll)
  .post(auth, handle.vote)
  .delete(auth, handle.deletePoll);

module.exports = router;