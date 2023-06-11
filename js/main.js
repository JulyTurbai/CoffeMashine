'use strict'

const menu = $('.menu');
const cup = $('.cup');


getData();

function getData() {

    fetch('coffe.json')
        .then(response => response.json())
        .then(response => {
            menu.html('<ul></ul>');
            $.each(response, function(index, elem) {
                menu.find('ul').append(`<li>${elem.name}</li>`)
            })
            return response;
        })
        .then(response => {
            menu.delegate('li', 'click', function() {
                let temp = $(this).text();
                let recept = response.filter(elem=>elem.name === temp);
                $(this).addClass('active').siblings().removeClass('active')
                cup.empty()
                generateRecept(recept)
            })
    })
}


function generateRecept(recept) {
    
    if(recept[0].name === "Еспрессо") {
        cup.append( `<div class="espresso" style="height:100px">${recept[0].recipe[0].ingredient}</div>`)
    }
    if(recept[0].name === "Доппіо") {
        cup.append( `<div class="espresso" style="height:200px">${recept[0].recipe[0].ingredient}</div>`)
    }
    if(recept[0].name === "Тріппло") {
        cup.append( `<div class="espresso" style="height:300px">${recept[0].recipe[0].ingredient}</div>`)
    }
    if(recept[0].name === "Амeрикано") {
        cup.append( `<div class="espresso" style="height:100px">${recept[0].recipe[0].ingredient}</div>
                     <div class="water" style="height:100px">${recept[0].recipe[1].ingredient}</div>`)
    }
    if(recept[0].name === "Флет Вайт") {
        cup.append( `<div class="espresso" style="height:100px">${recept[0].recipe[0].ingredient}</div>
                     <div class="milk" style="height:200px">${recept[0].recipe[1].ingredient}</div>`)
    }
    if(recept[0].name === "Капучіно") {
        cup.append( `<div class="espresso" style="height:100px">${recept[0].recipe[0].ingredient}</div>
                     <div class="milk" style="height:100px">${recept[0].recipe[1].ingredient}</div>
                     <div class="whippedmilk" style="height:200px">${recept[0].recipe[2].ingredient}</div>`)
    }
    if(recept[0].name === "Мокіато") {
        cup.append( `<div class="espresso" style="height:200px">${recept[0].recipe[0].ingredient}</div>
                     <div class="whippedmilk" style="height:100px">${recept[0].recipe[1].ingredient}</div>`)
    }
    if(recept[0].name === "Лате") {
        cup.append( `<div class="espresso" style="height:100px">${recept[0].recipe[0].ingredient}</div>
                     <div class="milk" style="height:200px">${recept[0].recipe[1].ingredient}</div>
                     <div class="whippedmilk" style="height:100px">${recept[0].recipe[2].ingredient}</div>`)
    }
    if(recept[0].name === "Кон Панна") {
        cup.append( `<div class="espresso" style="height:100px">${recept[0].recipe[0].ingredient}</div>
                     <div class="whippedcream" style="height:100px">${recept[0].recipe[1].ingredient}</div>`)
    }
    if(recept[0].name === "Бреве") {
        cup.append( `<div class="espresso" style="height:200px">${recept[0].recipe[0].ingredient}</div>
                     <div class="whippedcream" style="height:100px">${recept[0].recipe[1].ingredient}</div>`)
    }
    if(recept[0].name === "Фредо") {
        cup.append( `
                     <div class="ice" style="height:100px">${recept[0].recipe[2].ingredient}</div>
                     <div class="liquor" style="height:100px">${recept[0].recipe[1].ingredient}</div>
                     <div class="espresso" style="height:100px">${recept[0].recipe[0].ingredient}</div>`)
    }
    if(recept[0].name === "Романо") {
        cup.append( `<div class="espresso" style="height:100px">${recept[0].recipe[0].ingredient}</div>
                     <div class="lemonJuce" style="height:100px">${recept[0].recipe[1].ingredient}</div>`)
    }
    if(recept[0].name === "Марочино") {
        cup.append( `<div class="chocolate" style="height:100px">${recept[0].recipe[2].ingredient}</div>
                     <div class="espresso" style="height:100px">${recept[0].recipe[0].ingredient}</div>
                     <div class="whippedmilk" style="height:100px">${recept[0].recipe[1].ingredient}</div>`)
        }

}
