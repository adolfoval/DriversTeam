// COnfiguracion e inicializacion de la base de datos
import { initializeApp } from 'firebase/app'
// Referencia a la base de datos
import { getFirestore } from 'firebase/firestore'
// Referencia al paquete de autenticacion
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
// Metodos de interaccion con la base de datos
import { addDoc, collection, getDocs, query, getDoc, doc, updateDoc, deleteDoc, where, limit } from 'firebase/firestore'

import {Route, Redirect} from "react-router-dom"


const firebaseConfig = {
    apiKey: "AIzaSyAirdIlPt03ALUs-J-FKLugvxpjkA8XxJI",
    authDomain: "crudreact-bd5d.firebaseapp.com",
    projectId: "crudreact-bdb5d",
    storageBucket: "crudreact-bdb5d.appspot.com",
    messagingSenderId: "677317573105",
    appId: "1:677317573105:web:26ea38fce959c33eacec50"

};

initializeApp(firebaseConfig);
const database = getFirestore();
 export const auth = getAuth();


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
            id: credencialesUsuario.user.uid,
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
        alert(new Error(e));
        <Route exact path="/Login">
            <Redirect to="/Login"/>
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
        console.log(user);

        if (user) {
            console.log(user);
            return user
        } else {
            console.log('datos usuario:', user);
            return undefined
        }

    } catch (e) {
        throw new Error(e)
    }
}


// el.addEventListener('click', function)
// Usuario Activo
// onAuthStateChanged(auth, (user) => {

//     if (user) {
//         const usuario = user;
//         console.log('El usuario logueado');
//     }
    //else {
    //         console.log('El usuario ya no esta logueado');
    //         usuario = undefined
    //     }

// })

