'use strict';

function isObject( x ){
    return typeof x === 'object' && x !== null ;
}

module.exports = function getprop( obj , path ){
    if( ! isObject( obj ) || typeof  path !== 'string'){
        return obj ;
    }

    path = path.split('.');

    return getprop( obj[path.shift()], path.join('.')) ;
};