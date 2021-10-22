param appPlanId string
param location string
param webAppName string

resource webApp 'Microsoft.Web/sites@2021-01-01' = {
  name: webAppName
  location: location
  properties: {
    clientAffinityEnabled: false
    httpsOnly: true
    serverFarmId: appPlanId
    siteConfig: {
      alwaysOn: false
    }
  }
}
