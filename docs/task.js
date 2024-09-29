


module.exports = {
    paths: {//Este es el objeto principal donde se definen las diferentes rutas (endpoints) de la API. 
        //Cada clave en este objeto representa un endpoint específico.
        '/create': {
            post: {
                tags: {//se utiliza para categorizar el endpoint. 
                    Task: 'create a new task'
                },
                description: 'create a task',
                operationID: 'createTask',//Este es un identificador único para la operación.
                parameters: [],
                requestBody: {//sta sección define el cuerpo de la solicitud,
                    //debe incluir la representación de la tarea que se quiere crear.
                    content: {
                        'application/json': {//indica el formato en que se enviarán los datos
                            schema: {
                                $ref: '#/components/schemas/Task'//se refirie al esquema definido en components
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
                requestBody: {},
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
                        in: 'path',//indica en qué parte de la solicitud se espera encontrar el parámetro. 
                        //En este caso, el parámetro _id se espera que esté en la "ruta" o "path" de la URL,
                        
                        schema: {
                            $ref: '#/components/schemas/_id'
                        },
                        description: 'Id of task to be updated'
                    }
                ],
                requestBody: {
                    
                    content: {
                        'application/json': {
                            schema: { 
                                $ref: '#/components/schemas/Task'}//
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
            },
        
            delete: {
                tags: {
                    Task: "Delete a task"
                },
                description: "Delete a task",
                operationId: 'DeleteTask',
                parameters: [{
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/_id"
                    },
                    description: "ID of a task to be deleted",
                },
                ], requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task" }
                        },
                    }
                },
                responses: {
                    200: { description: "Task deleted successfully" },
                    500: { description: "Server error" }
                }
            }
        },

    },

}

