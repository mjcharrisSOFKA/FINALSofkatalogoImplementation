"use strict";

var { Enterprise, Person } = require('../models.js');

let alpina = new Enterprise("ALPINA", "860.025.900-2", "5.500-10.000 empleados", "Alimentos y bébidas", "../imgs/clients/alpina.jpg", "https://www.alpina.com/");
let proteccion = new Enterprise("PROTECCION", "800.229.739-0", "1.001-5.000 empleados", "Servicios Financiero", "../imgs/clients/proteccion.jpg", "https://www.proteccion.com");
let sura = new Enterprise("SURA", "900.847.380 ", "51-200 employees", "Servicios Financieroos", "../imgs/clients/sura.png", "https://www.segurossura.com.co");
let coordinadora = new Enterprise("COORDINADORA", "890.904.713", "1.001-5.000 empleados", "Transporte de mercancia", "../imgs/clients/coordinadora.png", "http://www.coordinadora.com/");
let alfaPeople = new Enterprise("ALFAPEOPLE", "830.013.988-9", "1.001-5.000 empleados", "Software y servicios informáticos", "../imgs/clients/alfapeople.png", "https://alfapeople.com/co/" );
let amadeus = new Enterprise("AMADEUS", "800-159-527", "1.001-5.000 empleados", "Software y servicios informáticos", "../imgs/clients/amadeus.png", "https://amadeus.com/es" );
let exito = new Enterprise("EXITO", "890.900.608-9", "Más de 10.000 empleados", "Comercio", "../imgs/clients/exito.png", "https://www.exito.com/");
let infocorp = new Enterprise("INFOCORP", "No Aplica", "51-200 empleados", "Software y servicios informáticos", "../imgs/clients/infocorp.png", "http://www.infocorp.com.uy" );
let iteriaUS = new Enterprise("ITERIAUS", "No Aplica", "51-200 empleados", "Software y servicios informáticos", "../imgs/clients/iteriaUS.png", "https://www.iteria.us/");
let metroM = new Enterprise("METRO DE MEDELLIN", "890.923.668-1", "51-200 empleados", "Transporte y movilidad", "../imgs/clients/metroM.png", "https://www.metrodemedellin.gov.co/");
let sas = new Enterprise("SAS", "No Aplica", "Más de 10.000 empleados", "Software y servicios informáticos", "../imgs/clients/sas.png", "https://www.sas.com");
let tecnoquimicas = new Enterprise("TECNOQUIMICAS", "890.300.466", "5,001-10,000 empleados", "Quimico y farmacéutico", "../imgs/clients/tecnoquimicas.jpg", "https://www.tqconfiable.com");
let teleperformance = new Enterprise("TELEFORMANCE", "900.323.853-7", "Más de 10.000 empleados", "Telecomunicaciones", "../imgs/clients/teleperformance.png", "http://www.teleperformance.co");

let juan = new Person("JUAN MONTOYA", "1.038.435,932", "../imgs/clients/personaHombre.png")
let liza = new Person("LIZ A", "42.813.784", "../imgs/clients/personaMujer.png")
let roxana = new Person("ROXANA", "1.020.456.846", "../imgs/clients/personaMujer.png");
let martha = new Person("MARTHA", "37.080.664", "../imgs/clients/personaMujer.png");
let gustavo = new Person("GUSTAVO", "1.100.950.935", "../imgs/clients/personaHombre.png");
let diego = new Person("DIEGO", "1.053.773.244", "../imgs/clients/personaHombre.png");
let luisa = new Person("LUISA", "1.036.389.136", "../imgs/clients/personaMujer.png");

let clientsCollection = {
    "enterprises": [alpina, proteccion, sura, coordinadora, alfaPeople, amadeus, exito, infocorp, iteriaUS, metroM, sas, tecnoquimicas, teleperformance ],
    "persons": [juan, liza, roxana, martha, gustavo, diego, luisa]
}

module.exports = clientsCollection;