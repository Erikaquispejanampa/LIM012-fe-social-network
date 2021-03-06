

export const createData = (table, id, json) => {
  console.log('table', table);
  console.log('id', id);
  console.log('json', json);
  firebase.firestore().collection(table).doc(id).set(json);
};

export const getData = (table, id) => {
  const docRef = firebase.firestore().collection(table).doc(id);
  return docRef.get();
};

/* --creando documento---*/
export const getUser = (docId) => {
  const docRef = firebase.firestore().collection('users').doc(docId);
  return docRef.get();
};
