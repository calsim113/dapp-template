param appPlanKind string
param appPlanName string
param location string
param skuName string

resource appPlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: appPlanName
  location: location
  kind: appPlanKind
  properties: {
    reserved: true
  }
  sku: {
    name: skuName
  }
}

output planId string = appPlan.id
