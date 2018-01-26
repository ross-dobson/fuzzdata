// domino.run(domino.modules.webrtc.makeCommand())
o = []
o[0] = new RTCPeerConnection({iceServers: [{urls: "stun:stun.l.google.com:19302"}]}, null) // L
o[1] = new RTCPeerConnection({iceServers: [{urls: "stun:stun.l.google.com:19302"}]}, null) // R
navigator.mediaDevices.getUserMedia({audio: true, video: true, fake: true})
    .then((stream) => {
        try { o[0].addTrack(stream.getAudioTracks()[0], stream) } catch(e) { console.log(e) }
        try { o[0].addTrack(stream.getVideoTracks()[0], stream) } catch(e) { console.log(e) }

        o[0].createOffer({offerToReceiveVideo: true, offerToReceiveAudio: true})
            .then((offer) => {
                console.log('1')
                console.log(offer.sdp)
                o[0].setLocalDescription(offer)
                return offer
            })
            .then((offer) => {
                console.log('2')
                /*offer.sdp = offer.sdp.replace(/m=audio (\d+) UDP\/TLS\/RTP\/SAVPF.*\r\n/g, 
                                              'm=audio $1 UDP/TLS/RTP/SAVPF 111\r\n')*/
                /*offer.sdp = offer.sdp.replace(/a=rtpmap:\d+ opus\/48000\/2\r\n/g, 
                                              'a=rtpmap:111 opus/4800/2\r\n')*/
                console.log(offer.sdp)
                o[1].setRemoteDescription(offer)
            })
            .then(() => {
                console.log('3')
                return o[1].createAnswer()
            })
            .then((answer) => {
                console.log('4')
                console.log(answer.sdp)
                answer.sdp = answer.sdp.replace(/a=rtpmap:\d+ opus\/48000\/2\r\n/g, 
                    'a=rtpmap:111 opus/4800/2\r\n')
                o[1].setLocalDescription(answer)
                return answer
            })
            .then((answer) => {
                console.log('5')
                o[0].setRemoteDescription(answer)
            })
            .then(() => {
                //console.log(o[1].getReceivers())
                //console.log(o[1].getRemoteStreams())
                /*
                let t = o[0].addTransceiver('audio')
                let c = [{
                    clockRate: 2000,
                    channels: 2,
                    sdpFmtpLine: 'a=fmtp:98 0-15'
                }]
                t.setCodecPreferences(c)
                */
                console.log("\n################### REACHED ###################");
            })
    })

