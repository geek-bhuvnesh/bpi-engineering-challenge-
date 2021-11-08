/**
 * Module dependencies.
 */
const multiTenancyAgent = require('./schema')

class multiTenancyAgentWrapper {
   // save agent info to mongodb 
  static async createServiceAgent(data) {
    try {
      const result = await multiTenancyAgent.insert(data)
      return result
    } catch (e) {
      console.log(`Create Service Agent Mongo Error , ${e}`)
    }
    return result
  }
  
  // retrived all agent from mongo
  static async getListOfAllJobs() {
    try {
      const result = await multiTenancyAgent.find()
      return result
    } catch (e) {
      console.log(`Get Service Agent Mongo Error, ${e}`)
    }
    return result
  }

  // retrived all agent from mongo
  static async updateJobImportance() {
    try {
      const result = await multiTenancyAgent.findAndUpdate()
      return result
    } catch (e) {
      console.log(`Get Service Agent Mongo Error, ${e}`)
    }
    return result
  }
}

module.exports = multiTenancyAgentWrapper