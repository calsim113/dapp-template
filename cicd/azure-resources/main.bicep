targetScope = 'subscription'

param appPlanKind string = 'app'
param appPlanName string = 'plan-dapp'
param resourceGroupName string = 'rg-dapp'
param skuName string = 'B1'
param webAppName string

resource rg 'Microsoft.resources/resourceGroups@2020-06-01' = {
  name: resourceGroupName
  location: deployment().location
}

module appPlanDeploy './modules/appPlan.bicep' = {
  name: 'appPlan-deploy'
  scope: rg
  params: {
    appPlanKind: appPlanKind
    appPlanName: appPlanName
    location: deployment().location
    skuName: skuName
  }
}

module webAppDeploy './modules/webApp.bicep' = {
  name: 'webApp-deploy'
  scope: rg
  params: {
    appPlanId: appPlanDeploy.outputs.planId
    location: deployment().location
    webAppName: webAppName
  }
}
