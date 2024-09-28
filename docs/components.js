const basicInfo = require('./basicInfo')

module.exports = {

   components: {
    schemas:{
        Task: {
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    description: 'task identification number',
                    example: '66ef4858f1a3123d81c744cb'
                },
            
                title: {
                    type: 'string',
                    description: 'title of the task',
                    example: 'de the challenge'
                    }  
            },
                completed: {
                    type: 'boolean',
                    description: 'indicates whether the task is done or not',
                    example: 'true'
                },
                createdAt: {
                    type: 'string',
                    format:'date-time',
                    description: 'indicates when the task was created',
                    example: '2024-09-21T22:27:36.518Z'
                },
                updatedAt: {
                    type: 'string',
                    format:'date-time',
                    description: 'indicates when the task was teh last update',
                    example: '2024-09-22T18:15:55.455Z'
                }
    
            },
            required: ["title"]
        }
   }
}       

