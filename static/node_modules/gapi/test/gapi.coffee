describe 'requiring gapi module', ->
	it 'should contain the server namespace', ->
    gapi = require '../index'
    gapi.should.have.property 'server'
    describe 'server namespace', ->
      it 'shoud contain the setApiKey function', ->
        gapi.server.should.have.property 'setApiKey'
        gapi.server.setApiKey.should.be.a 'function'
        describe 'calling setApiKey', ->
          it 'should set config.api.key to the value of first parameter', ->
            gapi.server.setApiKey 'AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI'
            config = require '../lib/config.coffee'
            config.api.key.should.equal 'AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI'
      it 'should contain the load function', ->
        gapi.server.should.have.property 'load'
        gapi.server.load.should.be.a 'function'