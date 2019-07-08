#!/usr/bin/node

// Requirements
var pcap = require('pcap'),
    tcp_tracker = new pcap.TCPTracker(),
    pcap_session = pcap.createSession('wlp4s0', ''),
    geoip = require('geoip-lite');



// TCP capture
tcp_tracker.on('session', function (session) {
    console.log("Start of session between " + session.src_name + " and " + session.dst_name);
    session.on('end', function (session) {
        console.log("End of TCP session between " + session.src_name + " and " + session.dst_name);
    });
});  


// Packet capture is evenement based
pcap_session.on('packet', function (raw_packet) {
    // do some stuff with a raw packet
    var packet  = pcap.decode.packet(raw_packet);
});