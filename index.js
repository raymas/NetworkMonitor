#!/usr/bin/node

// Requirements
var pcap = require('pcap'),
    pcap_session = pcap.createSession('wlp4s0', '');
var geoip = require('geoip-lite');


// Packet capture is evenement based
pcap_session.on('packet', function (raw_packet) {
    // do some stuff with a raw packet
    var ip = pcap.decode.packet(raw_packet).payload.dhost.addr,
        geo = geoip.lookup(ip.join('.'));
    console.log(geo, ip.join('.'));
});