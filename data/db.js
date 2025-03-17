//NOTE - importazione del pacchetto mysql
import mysql from 'mysql2';

//NOTE - Creiamo le variabili del file dotenv
const Host = process.env.DB_HOST
const User = process.env.DB_USER
const Password = process.env.DB_PASSWORD
const Name = process.env.DB_NAME

//NOTE - Creiamo la connessione
const connection = mysql.createConnection(
    {
        host: Host || 'localhost',
        user: User || 'root',
        password: Password || '',
        database: Name,
    }
)

//NOTE - Gestiamo l'avvenuta connessione con eventuali errori di connessione
connection.connect((err)=>{
    if (err) throw err;
    console.log(`connessione avvenuta con successo al database ${Name}`)
})
//NOTE - esportiamo la connection
export default connection;