// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter".
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

/** Array global de usuarios */
let users = [];

/** Array global de usuarios filtrados */
let usersFiltered = [];

/** Evento que llama a la funcion "onLoad" cuando carga la ventana */
window.addEventListener("load", onLoad);

/**
 * Funcion para crear los usuarios
 *
 * return array
 */
const createUsers = () => {
  let users = [];
  let user1 = {
    name: "usuario1",
    country: "spain",
    money: 199,
    premiumAccount: true
  };

  let user2 = {
    name: "usuario2",
    country: "france",
    money: 0,
    premiumAccount: false
  };

  let user3 = {
    name: "usuario3",
    country: "spain",
    money: 537,
    premiumAccount: false
  };

  let user4 = {
    name: "usuario4",
    country: "italy",
    money: 1004,
    premiumAccount: true
  };

  let user5 = {
    name: "usuario5",
    country: "spain",
    money: 250,
    premiumAccount: false
  };

  let user6 = {
    name: "usuario6",
    country: "ireland",
    money: 799,
    premiumAccount: true
  };

  let user7 = {
    name: "usuario7",
    country: "spain",
    money: 3345,
    premiumAccount: false
  };

  users.push(user1);
  users.push(user2);
  users.push(user3);
  users.push(user4);
  users.push(user5);
  users.push(user6);
  users.push(user7);

  return users;
};

/**
 * Funcion que valida la condicion de filtrado
 *
 * return condicion
 */
const validateFilter = element => {
  return element.country === "spain" && element.money > 200;
};

/**
 * Funcion que filtra los usuarios segun la condicion
 *
 * return array
 */
const filterUsers = usersToFilter => {
  let usersFiltered = usersToFilter.filter(validateFilter);
  return usersFiltered;
};

function onLoad() {
  console.log("Primer ejercicio Javascript por Alvaro Rueda Sanchez");
  users = createUsers();
  usersFiltered = filterUsers(users);
  console.log(users);
  console.log(usersFiltered);
}
