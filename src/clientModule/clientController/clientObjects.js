"use strict";

var { Enterprise, Person } = require('../models.js');

let alpina = new Enterprise("ALPINA", "860.025.900-2", "5.500-10.000 empleados", "Alimentos y bébidas", "https://cdn.advantis.co/wp-content/uploads/2018/06/Alpina-864x675.png", "https://www.alpina.com/");
let proteccion = new Enterprise("PROTECCION", "800.229.739-0", "1.001-5.000 empleados", "Servicios Financieros", "https://www.viviendocali.com/wp-content/uploads/2018/02/Protecci%C3%B3n-en-Cartagena.jpg", "https://www.proteccion.com");
let sura = new Enterprise("SURA", "900.847.380 ", "51-200 empleados", "Servicios Financieros", "https://mazkomazda.com/wp-content/uploads/2018/04/SURA_logo-16-9-728-2.jpg", "https://www.segurossura.com.co");
let coordinadora = new Enterprise("COORDINADORA", "890.904.713", "1.001-5.000 empleados", "Transporte de mercancia", "https://www.mayorca.com.co/wp-content/uploads/2018/06/coordinadora-mayorca.jpg", "http://www.coordinadora.com/");
let alfaPeople = new Enterprise("ALFAPEOPLE", "830.013.988-9", "1.001-5.000 empleados", "Software y servicios informáticos", "http://camara-comercio.com/wp-content/uploads/2016/03/AlfaPeople-270x150.jpg", "https://alfapeople.com/co/");
let amadeus = new Enterprise("AMADEUS", "800-159-527", "1.001-5.000 empleados", "Software y servicios informáticos", "https://www.conectaturismo.com/todo-sobre-agencias-de-viajes/wp-content/uploads/2018/03/xml-amadeus-motor-vuelos-gds-1080x675.png", "https://amadeus.com/es");
let exito = new Enterprise("EXITO", "890.900.608-9", "Más de 10.000 empleados", "Comercio", "https://steemitimages.com/DQmVe93wr7MeR5mZ673c7FWeFTqQ8FVwvVkxErWGef6cuLT/exito-01.jpg", "https://www.exito.com/");
let infocorp = new Enterprise("INFOCORP", "No Aplica", "51-200 empleados", "Software y servicios informáticos", "https://www.smarttalent.uy/innovaportal/file/3091/1/infocorp.png", "http://www.infocorp.com.uy");
let iteriaUS = new Enterprise("ITERIAUS", "No Aplica", "51-200 empleados", "Software y servicios informáticos", "https://media.licdn.com/dms/image/C510BAQEzNtFk6CiT7w/company-logo_200_200/0?e=2159024400&v=beta&t=HYm9PIGmoxS9rcaE16s4skNvPEwF2eVSZdI1ruckvZA", "https://www.iteria.us/");
let metroM = new Enterprise("METRO DE MEDELLIN", "890.923.668-1", "51-200 empleados", "Transporte y movilidad", "http://damconsultores.co/wp-content/uploads/2017/07/Metro-de-Medell%C3%ADn-1-1.jpg", "https://www.metrodemedellin.gov.co/");
let sas = new Enterprise("SAS", "No Aplica", "Más de 10.000 empleados", "Software y servicios informáticos", "https://www.observatoriorh.com/wp-content/uploads/2017/07/sas-logo.jpg", "https://www.sas.com");
let tecnoquimicas = new Enterprise("TECNOQUIMICAS", "890.300.466", "5,001-10,000 empleados", "Quimico y farmacéutico", "https://risaraldahoy.com/wp-content/uploads/2018/09/tecnoquimicas.jpg", "https://www.tqconfiable.com");
let teleperformance = new Enterprise("TELEFORMANCE", "900.323.853-7", "Más de 10.000 empleados", "Telecomunicaciones", "http://www.cccolombia.com/wp-content/uploads/2014/02/Teleperformance.png", "http://www.teleperformance.co");


let juan = new Person("JUAN ESTEBAN MONTOYA", "1.038.435,932", "https://examapplication.com/public/img/user.png");
let liza = new Person("LIZA", "42.813.784", "https://img.icons8.com/color/1600/administrator-female.png");
let roxana = new Person("ROXANA", "1.020.456.846", "https://img.icons8.com/color/1600/administrator-female.png");
let martha = new Person("MARTHA", "37.080.664", "https://img.icons8.com/color/1600/administrator-female.png");
let gustavo = new Person("GUSTAVO", "1.100.950.935", "https://examapplication.com/public/img/user.png");
let diego = new Person("DIEGO", "1.053.773.244", "https://examapplication.com/public/img/user.png");
let luisa = new Person("LUISA", "1.036.389.136", "https://img.icons8.com/color/1600/administrator-female.png");
let camilo = new Person("JUAN CAMILO MUÑOZ", "15.3456.451", "https://examapplication.com/public/img/user.png");

let clientsCollection = {
    "enterprises": [alpina, proteccion, sura, coordinadora, alfaPeople, amadeus, exito, infocorp, iteriaUS, metroM, sas, tecnoquimicas, teleperformance],
    "persons": [juan, liza, roxana, martha, gustavo, diego, luisa, camilo]
}

module.exports = clientsCollection;