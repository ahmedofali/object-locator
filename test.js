"use strict";
var test = require("ava") ;
var obj_locator = require('./');

test( function (t){
    var f1 = { foo:1} ;
    t.assert( obj_locator(f1) === f1 ) ;
    t.assert( obj_locator( { foo:1 } ,"foo" ) === 1 );
    t.assert( obj_locator( { foo:null } ,"foo" ) === null );
    t.end();
}) ;