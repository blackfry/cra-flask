gapi = require "../../../index"
config = require "../../../lib/config"

gapi.server.setApiKey "AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI"
gapi.server.load "plus", "v1", ->
  request = gapi.server.plus.activities.search query: 'Test'

  describe "calling activities.search({query: 'Test'})", ->
    it "should add /plus/v1/activities?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json&query=Test to config.requestOptions.path", ->
      config.requestOptions.path.should.equal "/plus/v1/activities?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json&query=Test"
    it "should return execute function", ->
      request.should.have.property 'execute'
      request.execute.should.be.a 'function'

  describe "calling execute with a callback", ->
    it "should make a request and return an object to the callback", (done) ->
      request.execute (resp) ->
        resp.should.be.a 'object'
        #resp.should.not.have.property 'error'
        done()