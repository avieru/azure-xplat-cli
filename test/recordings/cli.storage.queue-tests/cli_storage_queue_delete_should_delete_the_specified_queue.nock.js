// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=teststorage101;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://teststorage101.queue.core.windows.net:443')
  .delete('/storageclitestqueue')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '28869a95-0003-0068-26fd-e0be3f000000',
  'x-ms-version': '2014-02-14',
  date: 'Fri, 13 Mar 2015 03:51:07 GMT' });
 return result; }]];