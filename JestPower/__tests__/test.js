// 2020, 7/13, am 8:35 - 9:10 (duration: 35 mins)
// under folder called __test__, we got this code file 
// https://jestjs.io/docs/en/jest-object

var jest = require('jest-cli');
var KsForm = require('../radioButtonApp');

// jest.dontMock('../radioButtonApp'); //上層的檔案
jest.disableAutomock();

describe('radioButtonApp', function(){

    it('test my module', function(){

        var rba = require('../radioButtonApp');
        //expect(KsForm.____).tobe("Red Tea");
        expect(KsForm.authorize()).toBe('ok with token');

    });

});