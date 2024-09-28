const { get } = require("mongoose");
const components = require("./components");
const Task = require("../models/Task");
const { response } = require("express");

module.exports = {
    paths: {
        '/create': {
            post: {
                tags: {
                    Task: 'create a new task'
                },
                description: 'create a task',
                operationID: 'createTask',
                parameters: [],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Task'
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: 'Task create sucessfully'
                    },
                    500: {
                        description: 'Server error'
                    },
                },
            },
        },

        '/': {
            get: {
                tags: {
                    Task: 'get the tasks'
                },
                description: 'get the tasks',
                operationID: 'getTasks',
                parameters: [],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Task'
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: 'List of all tasks'
                    },
                    500: {
                        description: 'Server error'
                    },
                },
            },
        },
        '/id/{_id}': {
            put: {
                tags: {
                    Tasks: 'Update a task',
                },
                description: 'Update title only',
                operationID: 'updateTask',
                parameters: [
                    {
                        name: '_id',
                        in: 'path',
                        required: true,
                        schema: {
                            $ref: '#/components/schemas/_id'
                        },
                        description: 'Id of task to be updated'
                    }
                ],
                requestBody: {
                    required:true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/UpdateTitleRequest'}
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'Task updated succesfully'
                    },
                    '404': {
                        description: 'Task not found'
                    },
                },
            }
        },
                    
        '/delete': {
            delete: {
                tags: {
                    Task: 'Delete a task'
                },
                description: 'Delete tasks',
                operationId: 'deleteTask',
                paremeters: [],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Task'
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: 'Task deleted'
                    },
                    500: {
                        description: 'Server error'
                    },
                },
            },
        },

    },

}

