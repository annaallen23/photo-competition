'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = 'ec2-99-81-194-20.eu-west-1.compute.amazonaws.com';
var token = '980a4188-8608-4264-941d-7df74aac1ca3';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}
