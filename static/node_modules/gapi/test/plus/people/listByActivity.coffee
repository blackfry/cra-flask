gapi = require "../../../index"
config = require "../../../lib/config"

gapi.server.setApiKey "AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI"
gapi.server.load "plus", "v1", ->
  request = gapi.server.plus.people.listByActivity activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', collection: 'plusoners', maxResults: '1'

  describe "calling people.listByActivity({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', collection: 'plusoners', maxResults: '1'})", ->
    it "should add /plus/v1/activities/z12mijziozu0x5hrd04cfhnw1yymsn2o414/people/plusoners?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json&maxResults=1 to config.requestOptions.path", ->
      config.requestOptions.path.should.equal '/plus/v1/activities/z12mijziozu0x5hrd04cfhnw1yymsn2o414/people/plusoners?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json&maxResults=1'
    it "should return execute function", ->
      request.should.have.property 'execute'
      request.execute.should.be.a 'function'

  describe "calling execute with a callback", ->
    it "should make a request and return an object to the callback", (done) ->
      request.execute (resp) ->
        resp.should.be.a 'object'
        #resp.should.not.have.property 'error'
        done()