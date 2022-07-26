import server from './Service/Middlewars.js';
import Configuracion from './Utilities/Configuracion.js';

const main = () =>{
    server.listen(Configuracion.servidor.port, ()=>{
        console.log('Server on port: ', Configuracion.servidor.port);
    });
}

main();
