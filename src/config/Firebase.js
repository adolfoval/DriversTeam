// COnfiguracion e inicializacion de la base de datos
import { initializeApp } from 'firebase/app'
// Referencia a la base de datos
import { getFirestore } from 'firebase/firestore'
// Referencia al paquete de autenticacion
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, getRedirectResult, onAuthStateChanged } from 'firebase/auth'
// Metodos de interaccion con la base de datos
import { addDoc, collection, getDocs, query, getDoc, doc, updateDoc, deleteDoc, where, limit } from 'firebase/firestore'

import { Route, Redirect } from "react-router-dom"


/* const firebaseConfig = {
    apiKey: "AIzaSyDCAa6J48jm7cEHdKJJt2Qzbu6jKVUg-Hc",
    authDomain: "driverspub.firebaseapp.com",
    projectId: "driverspub",
    storageBucket: "driverspub.appspot.com",
    messagingSenderId: "716939539079",
    appId: "1:716939539079:web:17d7255d86d33de5a1be22"


}; */
const firebaseConfig = {
    apiKey: "AIzaSyC0lVGDuteAYM5kXHDIA1VkXxtfsAITlHk",
    authDomain: "prueba-93dff.firebaseapp.com",
    projectId: "prueba-93dff",
    storageBucket: "prueba-93dff.appspot.com",
    messagingSenderId: "431184930810",
    appId: "1:431184930810:web:5c4e9fee3bce05572ce643",
    measurementId: "G-H6NM5RKKVY"
  };

initializeApp(firebaseConfig);
const database = getFirestore();
export const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


// Guardar base de datos
export const guardarDatabase = async (nombreColeccion, data) => {

    try {
        const respuesta = await addDoc(collection(database, nombreColeccion), data)
        console.log(respuesta);
        return respuesta
    } catch (e) {
        throw new Error(e)
    }

}

// getAll()
export const consultarDatabase = async (nombreColeccion) => {
    try {
        const respuesta = await getDocs(query(collection(database, nombreColeccion)))
        // console.log(respuesta);

        const coleccionDatos = respuesta.docs.map((documento) => {
            // console.log(documento);
            // console.log(documento.data());
            const documentoTemporal = {
                id: documento.id,
                ...documento.data()
            }
            // console.log(documentoTemporal);
            return documentoTemporal
        })

        return coleccionDatos
    } catch (e) {
        throw new Error(e)
    }
}

// gteDocumentById()
// Consultar un documento
export const consultarDocumentoDatabase = async (nombreColeccion, id) => {
    try {
        const respuesta = await getDoc(doc(database, nombreColeccion, id))
        // console.log(respuesta);

        const documentoTemporal = {
            id: respuesta.id,
            ...respuesta.data()
        }

        console.log(documentoTemporal);
        return documentoTemporal
    } catch (e) {
        throw new Error(e)
    }
}


// Actualizacion de un documento
export const actualizarDocumentoDatabase = async (nombreColeccion, id, data) => {
    try {
        const respuesta = await updateDoc(doc(database, nombreColeccion, id), data)
        console.log(respuesta);
    } catch (e) {
        throw new Error(e)
    }
}

// Eliminacion de un documento
export const eliminarDocumentoDatabase = async (nombreColeccion, id) => {
    try {
        const respuesta = await deleteDoc(doc(database, nombreColeccion, id))
        console.log(respuesta);
    } catch (e) {
        throw new Error(e)
    }
}

// CrearUsuarios
export const crearUsuario = async (email, password) => {
    try {
        const credencialesUsuario = await createUserWithEmailAndPassword(auth, email, password)
        // console.log(credencialesUsuario);
        // console.log(credencialesUsuario.user);
        // console.log(credencialesUsuario.user.uid);
        const user = {
            idc: credencialesUsuario.user.uid,
            email: credencialesUsuario.user.email,
            rol: "Ninguno",
            estado: "Pendiente"
        }
        guardarDatabase('usuarios', user)
        return user
    } catch (e) {
        throw new Error(e)
    }
}
//registrar con google
export const crearUsuarioGoogle = async () => {

    try {
        const log = await signInWithPopup(auth, googleProvider);
        const usu = {
            idc: log.user.uid,
            email: log.user.email,
            rol: "Ninguno",
            estado: "Pendiente"
        }
        guardarDatabase("usuarios", usu);
        return usu;
    } catch (error) {
        return error;

    }
}

export const loginUsuariogoogle = async() =>{

    try{
        const log = await signInWithPopup(auth, googleProvider);
        return log.user;
    }catch(error){
        return error;
    }
}

// Login Usuarios
export const loginUsuario = async (email, password) => {
    try {
        const credencialesUsuario = await signInWithEmailAndPassword(auth, email, password);
        // console.log(credencialesUsuario);
        // console.log(credencialesUsuario.user);
        // console.log(credencialesUsuario.user.uid);
        // const user = {
        //   id: credencialesUsuario.user.uid,
        //   email: credencialesUsuario.user.email
        // }
        // usuario = user
        return credencialesUsuario.user

    } catch (e) {

        console.log(new Error(e), "a");
        <Route exact path="/Login">
            <Redirect to="/Login" />
        </Route>
    }
}


// LogOut -> salir
export const logOutUsuario = async () => {
    try {
        const respuesta = await signOut(auth)
        console.log(respuesta);
        console.log('Me sali...!');
    } catch (e) {
        throw new Error(e)
    }
}

//  datos usuario
export const datosUsuario = async () => {
    try {
        const user = auth.currentUser
        //console.log(user);

        if (user) {
            console.log(user);
            return user
        } else {
            //console.log('datos usuario:', user);
            return undefined
        }

    } catch (e) {
        throw new Error(e)
    }
}

onAuthStateChanged(auth, (user) => {

    if (user) {
        var uid = user.uid;

        // console.log('auth User', uid, user)
        console.log("logueado");
        return user;
    } else {
        console.log('user SignOut');
    }
});

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
