"use strict";var mocha;module.link('mocha',{default(v){mocha=v}},0);var chai;module.link('chai',{default(v){chai=v}},1);var Person;module.link('./../src/person.js',{default(v){Person=v}},2);



const { describe, it } = mocha;
const { expect } = chai;

describe('# Person', () => {
    it('should return a person instance from a string', () => {
        const person = Person.generateInstanceFromString(
            '1 Bike,Car 20000 2021-01-01 2020-02-01'
        );
        const expected = {
            from: '2021-01-01',
            to: '2020-02-01',
            vehicles: ['Bike', 'Car'],
            kmTraveled: '20000',
            id: '1'
        }

        expect(person).to.deep.equal(expected);
    });

    it('should format values', () => {
        const person = new Person({
            from: '2021-01-01',
            to: '2020-02-01',
            vehicles: ['Bike', 'Car'],
            kmTraveled: '20000',
            id: '1'
        });
        const result = person.formatted('pt-BR');
        const expected = {
            id: 1,
            vehicles: 'Bike e Car',
            kmTraveled: '20.000 km',
            from: '01/1/2021',
            to: '01/2/2020'
        }

        expect(result).to.deep.equal(expected);
    })
})