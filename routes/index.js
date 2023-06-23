const express = require('express');
const router = express.Router();
const multiTenancyAgentWrapper = require('./models/index')

/* POST Create Service Agent. */
router.POST('/createServiceAgent', async (req, res) => {
  console.log("Test Commit")
  const { headers, body } = req
  const result = {
    data: {},
    error: {},
    status: 200
  } 
  try {
    let response = await multiTenancyAgentWrapper.createServiceAgent(body)
    result.data = response
    result.error = null
    res.sedn()
  } catch(error) {
    result.status = 500
    result.error = error
    result.data = null
    res.send(result)
  }

})

/* GET List of all jobs. */
router.get('/listAllJobs', async (req, res) => {
  const { headers, body } = req
  const result = {
    data: {},
    error: {},
    status: 200
  } 
  try {
    let response = await multiTenancyAgentWrapper.getListOfAllJobs(body)
    result.data = response
    result.error = null
    res.sedn()
  } catch(error) {
    result.status = 500
    result.error = error
    result.data = null
    res.send(result)
  }

})

/* PUT Create Service Agent. */
router.put('/updateJobImportance', async (req, res) => {
  const { body : { jobId } } = req
  const result = {
    data: {},
    error: {},
    status: 200
  } 
  try {
    let response = await multiTenancyAgentWrapper.updateJobImportance(jobId)
    result.data = response
    result.error = null
    res.sedn()
  } catch(error) {
    result.status = 500
    result.error = error
    result.data = null
    res.send(result)
  }

})

module.exports = router;
