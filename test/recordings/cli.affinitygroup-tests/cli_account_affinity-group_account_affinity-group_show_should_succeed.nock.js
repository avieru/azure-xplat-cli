// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '00977cdb-163f-435f-9c32-39ec8ae61f4d',
    name: 'node',
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
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '575db4363dd47150b71d9d3b072a5698',
  date: 'Fri, 13 Mar 2015 19:24:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/affinitygroups/xplat-afg-1483')
  .reply(200, "<AffinityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplat-afg-1483</Name><Label>eHBsYXQtYWZnLTE0ODM=</Label><Description>AG-DESC</Description><Location>West US</Location><HostedServices/><StorageServices/><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities><CreatedTime>2015-03-13T19:24:44Z</CreatedTime></AffinityGroup>", { 'cache-control': 'no-cache',
  'content-length': '444',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'e31bfb83a2c57494af0c11aca489804a',
  date: 'Fri, 13 Mar 2015 19:24:47 GMT' });
 return result; }]];