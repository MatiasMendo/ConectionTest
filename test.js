const mongoose = require('mongoose');

const connectionString = 'mongodb://10.10.0.53:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.15';

async function connectToMongoDB() {
    try {
        // Conectar a MongoDB
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a MongoDB exitosamente');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
}

connectToMongoDB();

// Puedes agregar más código aquí para interactuar con tu base de datos
