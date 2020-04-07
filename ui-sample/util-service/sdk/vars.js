const config = {
    "dev": {
        "utilServicePort":process.env.util_service_port || 9181,
        "keycloak": {
            "url": process.env.keycloak_url || "http://localhost:8080", 
            "realmName": process.env.keycloak_realmName || "NIITRegistry",
            "clientId": "utils",
            "clientSecret": process.env.keycloak_clientSecret || "f6ce7466-b04f-4ccf-b986-e9c61e5fb26b"
        },
        "keycloak_epr": {
            "url": process.env.keycloak_epr_url || "http://localhost:8080",
            "realmName": process.env.keycloak_epr_realmName || "PartnerRegistry",
            "clientId": "utils",
            "clientSecret": process.env.keycloak_epr_clientSecret || "4ee47785-6434-4e6f-85d7-51096c3de579"
        },
        "notificationUrl": process.env.notificationUrl || "http://localhost:9012",
        "registryUrl": process.env.registry_url || "http://localhost:9180",
        "appUrl": process.env.app_url || "http://localhost:9182",
        "eprUtilServiceUrl": process.env.epr_utilservice_url || "http://localhost:9081"
    },
    "prod": {
        "keycloak": {
            "url": process.env.keycloak_url,
            "realmName": process.env.keycloak_realmName,
            "clientId": "utils",
            "clientSecret": process.env.keycloak_clientSecret
        },
        "keycloak_epr": {
            "url": process.env.keycloak_epr_url,
            "realmName": process.env.keycloak_epr_realmName,
            "clientId": "utils",
            "clientSecret": process.env.keycloak_epr_clientSecret
        },
        "notificationUrl": process.env.notificationUrl,
        "appUrl": process.env.app_url,
        "registryUrl": process.env.registry_url,
        "eprUtilServiceUrl": process.env.epr_utilservice_url,
        "notificationShouldSend": process.env.notification_send || false
    }
}

const logger = require('./log4j')

module.exports.getAllVars = function (envName) {
    var environment = envName
    if (envName === undefined) {
        environment = 'dev'
    }
    logger.info("Service running in mode = " + environment)
    return config[environment]
}