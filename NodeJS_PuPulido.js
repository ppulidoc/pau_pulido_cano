const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
port = 3000;

app.listen(port, () => {
  console.log(`Server listening on the port:: ${port}`)
})

function connection(){
  var serviceAccount = require('C:\\Users\\paupc\\Desktop\\DAM\\LEA\\pau_pulido_cano\\pau-pulido-cano-firebase-adminsdk-l5ihq-47c6926574.json'
  );
  var admin = require("firebase-admin");

  const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
  return getFirestore(app);
}

app.put('/api/ex2_ex6', (req , res) => {
  //const  nounom = {name: req.body.name, mail: "holaaa@gmail.com"}
  const db = connection();
  db.collection('Mundial').doc('').set(req.body);
})
