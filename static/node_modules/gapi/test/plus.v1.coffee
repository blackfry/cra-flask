gapi = require "../index"
config = require "../lib/config"

gapi.server.setApiKey "AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI"

describe "calling load with 'plus' and 'v1'", ->
  it "should add plus namespace to gapi.server", ->
    gapi.server.load "plus", "v1", ->
      gapi.server.should.have.property "plus"
      describe "plus namespace", ->
        it "should contain activities", ->
          gapi.server.plus.should.have.property "activities"
        it "should contain comments", ->
          gapi.server.plus.should.have.property "comments"
        it "should contain people", ->
          gapi.server.plus.should.have.property "people"