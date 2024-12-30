The solution is to always check `snapshot.exists` before accessing any properties of `snapshot.data()`. Here's how you'd modify the code:

```javascript
import { getFirestore, doc, getDoc } from "firebase/firestore";

// ... your Firebase configuration ...

const db = getFirestore();

async function getData(docId) {
  const docRef = doc(db, "yourCollection", docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null; // or handle the case appropriately
  }
}

getData("yourDocId").then(data => {
    // Process the data if it exists
    if(data) {
        console.log(data.name); //Access properties safely
    }
});
```
This updated code first checks if the document exists using `docSnap.exists()`. If it does, it safely accesses and processes the data; otherwise, it handles the case where the document is not found.